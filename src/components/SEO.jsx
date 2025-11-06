import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  author = "Vikramadithya Associates",
  url,
  image,
  type = "website"
}) => {
  const defaultTitle = "Vikramadithya Associates - Financial & Online Services";
  const defaultDescription = "One-stop destination for loans, insurance, financial services, online government services, and business solutions in Guntur, Andhra Pradesh.";
  const defaultImage = "/Logo.png";
  const siteUrl = "https://vikramadithya-associates.vercel.app";
  
  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;
  const pageKeywords = keywords ? `${keywords}, loans, insurance, financial services, Vikramadithya Associates, Guntur` : "loans, insurance, financial services, business registration, GST, income tax, PAN card, passport services, RTO services, student services, Vikramadithya Associates, Guntur";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Vikramadithya Associates" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
      <meta property="twitter:url" content={pageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};

export default SEO;