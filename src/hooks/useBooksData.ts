import { useEffect, useState } from 'react'
import { fetchBooks, fetchChapters, Book, Chapter } from '../api/books_supabase'

export interface BooksData {
  books: Book[]
  bookChapters: Record<string, Chapter[]>
  loading: boolean
  error: string | null
}

// 動態加載書籍和章節數據（支持1000+本書）
export function useBooksData(): BooksData {
  const [books, setBooks] = useState<Book[]>([])
  const [bookChapters, setBookChapters] = useState<Record<string, Chapter[]>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        // 加載所有書籍
        const booksData = await fetchBooks()
        setBooks(booksData)

        // 為每本書加載章節
        const chaptersMap: Record<string, Chapter[]> = {}
        for (const book of booksData) {
          const chapters = await fetchChapters(book.book_id)
          chaptersMap[book.book_id] = chapters
        }
        setBookChapters(chaptersMap)
        setError(null)
      } catch (err) {
        console.error('Failed to load books data:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  return { books, bookChapters, loading, error }
}
