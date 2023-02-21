import styles from './page.module.css'
import PortfolioHome from "@/components/PortfolioHome";


export default function Home() {
  return (
    <main className={styles.main}>
      <PortfolioHome />
    </main>
  )
}
