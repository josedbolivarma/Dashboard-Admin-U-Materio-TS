import styles from './page.module.css'
import { LayoutAppBar } from "../@core/components";
import LoginPage from './pages/login';

export default function Home() {
  return (
    <main>
        <LoginPage />
    </main>
  )
}
