import styles from './page.module.css'
import PortfolioHome from "@/sections/PortfolioHome";


export default function Home() {
  return (
    <main className={styles.main}>
      <PortfolioHome />
    </main>
  )
}
