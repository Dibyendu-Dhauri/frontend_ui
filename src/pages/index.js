import Image from 'next/image'
import {  Inter } from 'next/font/google'
import Header from '../components/Header'
import About from '../components/About'
import Emotions from '../components/Emotions'
import Demo from '@/components/Demo'
import Test from '@/components/Test'
import Collaboration from '@/components/Collaboration'
import Careers from '@/components/Careers'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Nav/>
    <Header/>
    <About/>
    <Emotions/>
    <Demo/>
    <About/>
    <Test/>
    <Collaboration/>
    <Careers/>
    <Footer/>
   </div>
  )
}
