import React from 'react';
function Footer(){
    return(
        <div class="footer">

			<div class="inner_footer">
			
				<div class="footer_section">
					<h1>Produkte</h1>
					<a>Kupplungen</a>
					<a>Bremsen</a>
					<a>Riemenantriebe</a>
					<a>Flanschkupplungen</a>
					<a>Handling-Systeme</a>				
				</div>
			
				<div class="footer_section">
					<h1>Lösungen</h1>
					<a>In 3 Schritten zur Perfektion</a>
					<a>Abfüllen &amp; Befördern</a>
					<a>Industrielle Sägen</a>
					<a>Intralogistik</a>
					<a>Verpacken & Befördern</a>
				</div>
			
				<div class="footer_section">
					<h1>Dienstlestungen</h1>
					<a>Kundendienst</a>
					<a>Ausbildung</a>
					<a>Ingenieurleistungen</a>
					<a>Software</a>
					<a>Wissenbasis</a>
				</div>
			
				<div class="footer_section">
					<h1>Unternehmen</h1>
					<a>Über Uns</a>
					<a>Kontaktformular</a>
					<a>Newsletter</a>
					<a>Mediathek</a>
					<a>Unternehmensgruppe</a>
				</div>

				<div class="copyright">
					<p>Copyright &copy; <script>document.write(new Date().getFullYear());</script>, MY APP</p>
				</div>
			
			</div>
			
		</div>
    )
}
export default Footer;