# Rankflow - Advanced SEO Plugin for Strapi

Rankflow is a powerful SEO enhancement plugin for Strapi. It integrates seamlessly into the Strapi admin panel to provide content creators with real-time feedback on how their pages will appear on search engines and social media platforms before hitting publish.

## ✨ Features

* **Real-Time SERP Previews:** Instantly visualize how your meta title, description, and URL will appear in Google search results as you type.
* **Social Media Card Previews:** Dynamically preview how your content will look when shared on platforms like Twitter, Facebook, and LinkedIn.
* **Live Form Data Capture:** Built using Strapi's admin injection zones and custom hooks to ensure previews update instantly without needing to save the document first.
* **Reusable SEO Schema:** Provides a standardized, easily attachable SEO database component that allows you to quickly add meta titles, descriptions, and images to any of your existing Strapi content types.

## 🚀 Installation

Install the plugin using your preferred package manager:

    npm install rankflow
    # or
    yarn add rankflow

## 🛠️ Configuration & Usage

**1. Enable the Plugin** After installation, ensure the plugin is enabled in your Strapi `config/plugins.js` (or `plugins.ts`) file:
   
    module.exports = {
      // ...
      'rankflow': {
        enabled: true,
      },
      // ...
    }

**2. Rebuild the Admin Panel** Because Rankflow injects custom React components into the Strapi admin UI, you must rebuild your admin panel for the changes to take effect:
   
    npm run build
    # or
    yarn build

**3. Attach the SEO Schema** * Navigate to the **Content-Type Builder** in your Strapi admin panel.
* Select the Collection or Single Type where you want to add SEO fields.
* Add a new component and select the reusable SEO component provided by Rankflow.

**4. Start Previewing** * Go to the **Content Manager** and open an entry.
* As you fill out the SEO component fields, the Rankflow preview panel will automatically generate live, side-by-side Google SERP and Social Media cards.

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome.
