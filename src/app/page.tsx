import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import HeroSection from './components/HeroSection';
import HeritageSection from './components/HeritageSection';
import RoomsSection from './components/RoomsSection';
import CuisineSection from './components/CuisineSection';
import CourtyardSection from './components/CourtyardSection';
import ExperiencesSection from './components/ExperiencesSection';
import GallerySection from './components/GallerySection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <HeritageSection />
        <RoomsSection />
        <CuisineSection />
        <CourtyardSection />
        <ExperiencesSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}