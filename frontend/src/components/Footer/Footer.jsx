import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterSection LogoSection">
        <h4 className="FooterTitle">Bibliotech</h4>
      </div>

      <div className="FooterSection">
        <h4>Canais de atendimento</h4>
        <p>Email: bibliotech@gmail.com</p>
        <p>Instagram: @bibliotech</p>
      </div>

      <div className="FooterSection">
        <h4>Localização</h4>
        <p>Endereço: Rua dos Leitores, 78 - São Carlos, SP - 12345-678</p>
      </div>
    </footer>
  );
}

export default Footer;
