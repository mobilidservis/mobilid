export default defineNuxtPlugin((nuxtApp) => {
    
    function gtag() {
      window.dataLayer.push(arguments);
    }
    
    window.dataLayer = window.dataLayer || [];
    
    gtag("js", new Date());
    gtag("config", 'AW-11280349539');
    gtag('event', 'conversion', {'send_to': 'AW-11280349539/DicqCLXzg8sYEOPy8YIq'});
    
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=AW-11280349539`,
          async: true,
        },
      ],
    });
  });