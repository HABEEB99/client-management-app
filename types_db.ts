export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          assignedStaff: string | null
          avatar: string | null
          contact: string | null
          created_at: string | null
          id: number
          name: string | null
          organization: string | null
          status: string | null
        }
        Insert: {
          assignedStaff?: string | null
          avatar?: string | null
          contact?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          organization?: string | null
          status?: string | null
        }
        Update: {
          assignedStaff?: string | null
          avatar?: string | null
          contact?: string | null
          created_at?: string | null
          id?: number
          name?: string | null
          organization?: string | null
          status?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
