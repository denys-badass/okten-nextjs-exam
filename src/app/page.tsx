import Image from "next/image";
import {Button} from "@heroui/button";
import styles from './page.module.css'

export default function Home() {
    return (
      <div className={styles.container}>
          <div className='flex justify-center items-center w-[400px] h-full mx-auto flex-col'>
              <h1 className='text-6xl font-bold'>Welcome to</h1>
              <Image src='/moviehub_logo.svg' alt='MovieHub Logo' width={400} height={300}/>
              <div className='flex justify-center gap-8 w-full mt-4'>
                  <Button color='primary' variant='ghost'>Log In</Button>
                  <Button color='primary' variant='flat'>Continue as Guest</Button>
              </div>
          </div>
      </div>

    );
}
