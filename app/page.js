"use client"
import Hero from "./_components/hero.jsx";
import Faq from "./_components/FAQPage.jsx";
import StatsPage from "./_components/StatsPage.jsx";
import Title from "./_components/title.jsx";
import WarTicket from "./_components/warTicket.jsx";
import RegularTicket from "./_components/regularTicket.jsx";
import Speakers from "./_components/speakers.jsx";
import Partners from "./_components/partners.jsx";
import EventHighlights from "./_components/eventHighlights.jsx";
import TicketPurchaseModal from "./_components/TicketPurchaseModal.jsx";
import GuestContainer from "./_components/GuestContainer.jsx";
import PartnerContainer from "./_components/PartnerContainer.jsx";

export default function Home() {
  return (
    <div className="h-full">
      <Hero/>
      {/* <WarTicket/> */}
      {/* <StatsPage/> */}
      <EventHighlights/>
      <Title/>
      <RegularTicket/>
      <GuestContainer/>
      <PartnerContainer/>
      <Faq/>
      <TicketPurchaseModal/>
    </div>
  );
}
