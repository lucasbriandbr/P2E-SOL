import type { NextPage } from 'next'
import { BrowserRouter as Router } from 'react-router-dom'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// pages/index.js

import Layout from "./components/Layout";

const Index = () => <Layout>Welcome to WHATABYTE!</Layout>;

export default Index;