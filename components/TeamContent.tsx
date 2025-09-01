import React from 'react'
import { OfficeSection } from './OfficeSection'
import { TeamMember } from './TeamMember'

const TeamContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {/* Head Office */}
    <OfficeSection title="Head Office" location="Gikondo-Magerwa" isHeadOffice>
      <TeamMember 
        name="SIBONIYO Theophile" 
        title="Managing Director" 
        phone="+250788465059"
        isManager
        imageURL='/partners/Theophile.jpeg'
      />
      <TeamMember 
        name="KARIRENGE Prudencienne" 
        title="Operations" 
        phone="+250788688342"
        imageURL='/partners/Prudencienne.jpeg'
      />
      <TeamMember 
        name="IKUZWE THIERRY" 
        title="Operations" 
        phone="+250780463394"
        imageURL='/partners/Thierry.jpeg'
      />
    </OfficeSection>

    {/* Dubai Port Office */}
    <OfficeSection title="Dubai Port Office" location="DPW">
      <TeamMember 
        name="TUYISHIME GILBERT PIERRE" 
        title="Port Operations Manager" 
        phone="+250785277420"
        isManager
      />
    </OfficeSection>

    {/* Branch Offices */}
    <OfficeSection title="Gatuna Branch Office">
      <TeamMember 
        name="BEMERIKI MARIE CHANTAL" 
        title="Branch Manager" 
        phone="+250787250050"
        isManager
        imageURL='/partners/Bemeriki.jpeg'
      />
    </OfficeSection>

    <OfficeSection title="Rusumo Branch Office">
      <TeamMember 
        name="RUGWIZA CELESTIN" 
        title="Branch Manager" 
        phone="+250788513889"
        isManager
      />
    </OfficeSection>

    {/* Uganda Office */}
    <OfficeSection title="Landmark Logistics" location="Plot 15 Robert Mugabe Rd, Mbuya Kampala, Uganda">
      <TeamMember 
        name="GUMISIRIZA IAN" 
        title="Managing Director" 
        phone="+256777133215"
        isManager
      />
      <TeamMember 
        name="BAPFAGUHEKA DESIRE" 
        title="Assistant Operations Manager" 
        phone="+256774224578"
      />
      <TeamMember 
        name="MWESIGA MARTIN" 
        title="Operations Manager" 
        phone="+256777094500"
        isManager
      />
    </OfficeSection>

    {/* International Representatives */}
    <OfficeSection title="International Representatives">
      <TeamMember 
        name="HAKIRABAKE CYPRIEN" 
        title="United States Representative" 
        phone="+14059266841"
      />
      <TeamMember 
        name="SIBONIYO CONFIANE" 
        title="European Union Representative" 
        phone="+48515412010"
        imageURL='/partners/Confi.jpeg'
      />
    </OfficeSection>

    {/* Legal Advisors */}
    <OfficeSection title="Legal Advisors">
      <TeamMember 
        name="Maître Natukunda Patience" 
        title="Legal Advisor" 
        phone="+250784397240"
        imageURL='/partners/Patience.jpeg'
      />
      <TeamMember 
        name="Maître Masengesho Alliance" 
        title="Legal Advisor" 
        phone="+250791760887"
        imageURL='/partners/Alliance.jpeg'
      />
    </OfficeSection>
  </section>
  )
}

export default TeamContent