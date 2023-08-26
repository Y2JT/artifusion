import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./landingpage.module.css";

const LandingPage = () => {
    return (
        <div className={styles.landingbox}>
            <div className={styles.landingpicture}></div>
            <div className={styles.center}>
                <div className={styles.fadebox}></div>
                <div className={styles.fadeinimage}>
                ArtiFusion
                </div>
                <div className={styles.interiorPos}>
                    <div className={styles.interiorPosA}>
                    <Link href="/sign-in">
                        <Button>
                            Login
                        </Button>
                    </Link>
                    </div>
                    <div className={styles.interiorPosA}>
                    <Link href="/sign-up">
                        <Button>
                            Register
                        </Button>
                    </Link>
                    </div>
                </div>
            </div>
            <div className={styles.centerA}></div>
        </div>
    );
}

export default LandingPage;