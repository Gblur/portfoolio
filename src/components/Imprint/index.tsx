import React from "react";

type Props = {};

export default function Imprint({}: Props) {
  return (
    <div>
      <h3>Imprint Owner and operator:</h3>
      <br />
      <p>Florian Gaebler</p> <p>Bornemannstrasse 1</p>
      <p>floriangaebler87@gmail.com</p>
      <br />
      <h3>Disclaimer:</h3>
      <article>
        <p>
          The content of this website has been created with great care and is
          provided for informational purposes only. However, the owner does not
          guarantee the accuracy, completeness, or timeliness of the information
          provided. The owner is not liable for any errors or omissions in the
          content of this website, nor for any damages arising from the use or
          reliance on this website. Copyright: All content on this website,
          including text, graphics, logos, images, and software, is the property
          of the owner and is protected by copyright law. Unauthorized use of
          any content on this website is strictly prohibited. Privacy policy:
          This website does not collect any personal data from visitors, except
          for the data provided by the visitor through the contact form or
          email. Any personal data collected will be used solely for the purpose
          of responding to inquiries or providing requested information. The
          owner does not share any personal data with third parties, unless
          required by law.
        </p>
      </article>
    </div>
  );
}
