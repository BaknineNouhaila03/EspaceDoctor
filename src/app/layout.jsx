import "@assets/css/style.css";
import "@assets/css/bootstrap.min.css";
import Header from "../components/Header";
import Sidebar from "@components/Sidebar";
export const metadata = {
  title: "Espace Medecin ESJ",
  description:
    "Connecter les médecins pour une meilleure productivite",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" />
        <script
          src="https://kit.fontawesome.com/a790242b27.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;1,400&display=swap"
        />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        <Sidebar id='menu-item1' id1='menu-items1' activeClassName='doctor-list'/>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
