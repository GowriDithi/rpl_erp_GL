import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Notification {
  id: string
  title: string
  content: string
  category: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  sender: string
  recipients: string[]
  scheduledDate?: Date
  expiryDate?: Date
  status: 'draft' | 'scheduled' | 'sent' | 'archived'
  readCount: number
  totalRecipients: number
  createdAt: Date
  updatedAt: Date
}

interface NotificationStore {
  notifications: Notification[]
  selectedNotification: Notification | null
  isLoading: boolean
  filters: {
    category: string
    priority: string
    status: string
    dateRange: [Date | null, Date | null]
  }
  
  // Actions
  setNotifications: (notifications: Notification[]) => void
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateNotification: (id: string, updates: Partial<Notification>) => void
  deleteNotification: (id: string) => void
  setSelectedNotification: (notification: Notification | null) => void
  setLoading: (loading: boolean) => void
  setFilters: (filters: Partial<NotificationStore['filters']>) => void
  clearFilters: () => void
  
  // Computed
  getFilteredNotifications: () => Notification[]
  getNotificationsByStatus: (status: Notification['status']) => Notification[]
  getNotificationsByPriority: (priority: Notification['priority']) => Notification[]
}

export const useNotificationStore = create<NotificationStore>()(
  devtools(
    persist(
      (set, get) => ({
        notifications: [],
        selectedNotification: null,
        isLoading: false,
        filters: {
          category: '',
          priority: '',
          status: '',
          dateRange: [null, null],
        },

        setNotifications: (notifications) => 
          set({ notifications }, false, 'setNotifications'),

        addNotification: (notification) => 
          set((state) => ({
            notifications: [
              ...state.notifications,
              {
                ...notification,
                id: Math.random().toString(36).substr(2, 9),
                createdAt: new Date(),
                updatedAt: new Date(),
              }
            ]
          }), false, 'addNotification'),

        updateNotification: (id, updates) => 
          set((state) => ({
            notifications: state.notifications.map(n => 
              n.id === id 
                ? { ...n, ...updates, updatedAt: new Date() }
                : n
            )
          }), false, 'updateNotification'),

        deleteNotification: (id) => 
          set((state) => ({
            notifications: state.notifications.filter(n => n.id !== id)
          }), false, 'deleteNotification'),

        setSelectedNotification: (notification) => 
          set({ selectedNotification: notification }, false, 'setSelectedNotification'),

        setLoading: (loading) => 
          set({ isLoading: loading }, false, 'setLoading'),

        setFilters: (filters) => 
          set((state) => ({
            filters: { ...state.filters, ...filters }
          }), false, 'setFilters'),

        clearFilters: () => 
          set({
            filters: {
              category: '',
              priority: '',
              status: '',
              dateRange: [null, null],
            }
          }, false, 'clearFilters'),

        getFilteredNotifications: () => {
          const { notifications, filters } = get()
          return notifications.filter(notification => {
            if (filters.category && notification.category !== filters.category) return false
            if (filters.priority && notification.priority !== filters.priority) return false
            if (filters.status && notification.status !== filters.status) return false
            
            if (filters.dateRange[0] && notification.createdAt < filters.dateRange[0]) return false
            if (filters.dateRange[1] && notification.createdAt > filters.dateRange[1]) return false
            
            return true
          })
        },

        getNotificationsByStatus: (status) => {
          const { notifications } = get()
          return notifications.filter(n => n.status === status)
        },

        getNotificationsByPriority: (priority) => {
          const { notifications } = get()
          return notifications.filter(n => n.priority === priority)
        },
      }),
      {
        name: 'notification-store',
        partialize: (state) => ({
          notifications: state.notifications,
          filters: state.filters,
        }),
      }
    ),
    {
      name: 'notification-store',
    }
  )
)