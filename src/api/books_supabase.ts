import { supabase } from '../lib/supabase'

export interface Book {
  id: number
  book_id: string
  title: string
  author?: string
  description?: string
  cover_color?: string
  chapters_count: number
}

export interface Chapter {
  id: number
  book_id: string
  chapter_id: string
  title: string
  display_order: number
}

export interface Section {
  id: number
  chapter_id: string
  section_id: string
  title: string
  icon?: string
  expanded_by_default: boolean
  display_order: number
  content?: Record<string, any>
}

// 獲取所有書籍（支持 1000+ 本）
export async function fetchBooks(): Promise<Book[]> {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .order('id')

  if (error) {
    console.error('獲取書籍失敗:', error)
    return []
  }

  return data || []
}

// 獲取特定書籍的所有章節
export async function fetchChapters(bookId: string): Promise<Chapter[]> {
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .eq('book_id', bookId)
    .order('display_order')

  if (error) {
    console.error('獲取章節失敗:', error)
    return []
  }

  return data || []
}

// 獲取特定章節的所有區塊
export async function fetchSections(chapterId: string): Promise<Section[]> {
  const { data, error } = await supabase
    .from('sections')
    .select('*')
    .eq('chapter_id', chapterId)
    .order('display_order')

  if (error) {
    console.error('獲取區塊失敗:', error)
    return []
  }

  return data || []
}

// 獲取單個章節（包含所有區塊）
export async function fetchChapterWithSections(bookId: string, chapterId: string) {
  const { data: chapter, error: chapterError } = await supabase
    .from('chapters')
    .select('*')
    .eq('book_id', bookId)
    .eq('chapter_id', chapterId)
    .single()

  if (chapterError) {
    console.error('獲取章節失敗:', chapterError)
    return null
  }

  const sections = await fetchSections(chapterId)

  return {
    ...chapter,
    sections
  }
}

// 保存用戶進度
export async function saveUserProgress(
  userId: string,
  bookId: string,
  chapterId: string,
  expandedSections?: string[]
) {
  const { error } = await supabase.from('user_progress').upsert({
    user_id: userId,
    book_id: bookId,
    last_chapter_id: chapterId,
    expanded_sections: expandedSections ? { [chapterId]: expandedSections } : {},
    last_visited: new Date().toISOString()
  })

  if (error) console.error('保存進度失敗:', error)
}

// 獲取用戶進度
export async function fetchUserProgress(userId: string, bookId: string) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('book_id', bookId)
    .single()

  if (error) return null
  return data
}

// 添加書籤
export async function addBookmark(
  userId: string,
  bookId: string,
  chapterId: string,
  sectionId?: string,
  note?: string
) {
  const { error } = await supabase.from('bookmarks').insert({
    user_id: userId,
    book_id: bookId,
    chapter_id: chapterId,
    section_id: sectionId,
    note
  })

  if (error) console.error('添加書籤失敗:', error)
}

// 獲取用戶書籤
export async function fetchUserBookmarks(userId: string, bookId: string) {
  const { data, error } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('user_id', userId)
    .eq('book_id', bookId)
    .order('created_at', { ascending: false })

  if (error) console.error('獲取書籤失敗:', error)
  return data || []
}

// 刪除書籤
export async function deleteBookmark(bookmarkId: number) {
  const { error } = await supabase
    .from('bookmarks')
    .delete()
    .eq('id', bookmarkId)

  if (error) console.error('刪除書籤失敗:', error)
}
