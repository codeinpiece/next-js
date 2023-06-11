import styles from './styles.module.css'

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section>
            <nav>
                This is Dashboard Nav Bar
            </nav>
            <main className= {styles.main}>
            {children}
            </main>
            
        </section>
    )
  }