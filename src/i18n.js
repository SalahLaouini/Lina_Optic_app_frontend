import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  
  .init({
    resources: { 
      en: {
        translation: {
          "navbar": {
            "brand": "Wahret Zmen"
          },
          home: "Home",
          products: "Products",
          "about-menu": "About", // English
          "contact-menu": "Contact",
          search_input: {
            placeholder: "Search for products..."
          },
          dashboard: "Dashboard",
          orders: "Orders",
          logout: "Logout",
          select_category: "Select Category",
          categories: {
            all: "All",
            men: "Men",
            women: "Women",
            children: "Children",
          },
          product_filters: {
            label: "Select Products", // English translation of the label
            men: "Men",
            women: "Women",
            children: "Children",
            "all": "All",  // English translation for "All"

          },


          
          home_title: "Wahret Zmen - Traditional Clothing and Our Sellers",
          home_meta_description: "Welcome to Wahret Zmen, explore our traditional clothing collection, new arrivals, and the latest fashion trends.",
          home_intro_html: "Welcome to Wahret Zmen Boutique</strong>, where tradition meets elegance. Explore our handcrafted garments, inspired by Tunisia’s rich cultural heritage. Experience timeless fashion that blends history with modern refinement.",
          home_banner_text: "Step into tradition with elegance. Wahret Zmen Boutique brings you a timeless collection of authentic Tunisian attire, crafted with passion and heritage.",
          our_sellers: "Our Sellers",
          our_sellers_intro: "Explore our collection of traditional garments, each crafted with care and cultural authenticity. From elegant Kaftans to classic Jebbas, discover the beauty of heritage in every piece.",
          latest_news: "Latest News & Trends",
          latest_news_intro: "Stay updated with the latest from Wahret Zmen! Discover new collections, fashion insights, and exclusive offers that keep tradition alive in a modern world.",
          banner_img_alt: "Traditional Tunisian Clothing",
          banner_title: "Wahret Zmen by Sabri – Preserving Tunisian Heritage with Elegance",
          banner_description: "Wahret Zmen is a unique boutique of traditional Tunisian clothing located in El Aswak, Tunis, Essouf Street. The boutique offers a carefully selected selection of authentic Tunisian clothing, including the iconic Jebba, famous for its intricate craftsmanship and cultural significance.",
          discover_now: "Discover Now",
          wahret_zmen_collection: "Wahret Zmen Collection",
          
          
          load_more: "Load More",
          no_products_found: "No products found.",
          our_sellers_intro_html: "Explore our collection of traditional garments, each crafted with care and cultural authenticity. From elegant Kaftans to classic Jebbas, discover the beauty of heritage in every piece.",

          products_page: {
            title: "Products Collection",
            overview: "At Wahret Zmen, we preserve the essence of Tunisian artistry by blending classic techniques with modern refinement. Whether you seek a luxurious piece for a special occasion or a timeless outfit, our collection is designed to celebrate the beauty of tradition."
          },

          about: {
            title: "About Wahret Zmen",
            description: "Wahret Zmen is a traditional Tunisian clothing boutique celebrating heritage through timeless fashion.",
            mission_title: "Our Mission",
            mission_text1: "Wahret Zmen is more than a boutique — it's a tribute to Tunisian identity, craftsmanship, and elegance. We specialize in authentic garments such as Jebbas, Kaftans, and finely embroidered dresses that are handmade by local artisans.",
            mission_text2: "Every item in our collection reflects generations of traditional artistry, carefully curated for customers seeking both style and cultural authenticity. Our vision is to preserve our roots while dressing the world in Tunisian beauty.",
            crafted_title: "Crafted With Love",
            crafted_text1: "Our artisans use traditional techniques passed down through generations to ensure every item is unique, durable, and rich in detail. From wedding garments to modern cultural wear, Wahret Zmen blends legacy and elegance.",
            crafted_text2: "Each piece is a work of passion, sewn with pride, and designed to showcase the beauty of Tunisian culture.",
            behind_title: "Behind the Boutique",
            behind_text: "Step inside our world of delicate embroidery and time-honored skill. The heart of Wahret Zmen lies in the hands of our skilled artisans.",
            join_title: "Join the Tradition",
            join_text1: "Whether you're visiting our boutique in person or browsing our online store, we welcome you to discover the spirit of Tunisia woven into every garment.",
            join_text2: "Wahret Zmen is a celebration of heritage, elegance, and identity — crafted for you."
          },

          contact: {
            page_title: "Contact Us",
            heading: "Contact Us",
            subtitle: "Feel free to reach out to us for any inquiries.",
            address_label: "Address",
            address_value: "Souk Essouf, Tunis",
            email_label: "Email",
            phone_label: "Phone",
            title: "Contact Wahret Zmen Boutique",
            description: "Have questions about our collection of traditional clothing? Looking for a custom design or special order? We'd love to hear from you! Fill out the form below, and our team will get back to you as soon as possible.",
            name_placeholder: "Your Name",
            email_placeholder: "Your Email",
            subject_placeholder: "Subject",
            message_placeholder: "Your Message",
            send_message: "Send Message",
            sending: "Sending...",
            success_message: "Message sent successfully!",
            error_message: "Failed to send the message. Please try again later."
          },
          


          stock: "Stock",
          out_of_stock: "Out of Stock",
          trending: "Trending",
          color: "Color",
          quantity: "Qty",
          add_to_cart: "Add to Cart",
          unknown_product: "Unknown Product",
          category: "Category",
          published: "Published",
          unknown: "Unknown",
          no_description: "No description available.",
          select_color: "Select Color",
          selected: "Selected",
          default: "Default",
          available_colors: "Available Colors",

          news: {
            section_title: "Latest News",
            items: [
              {
                title: "Wahret Zmen by Sabri: A Boutique of Traditional Tunisian Elegance",
                description: "Wahret Zmen by Sabri is a boutique specializing in traditional Tunisian clothing, especially handmade garments with intricate silk embroidery."
              },
              {
                title: "Discover the Essence of Tunisian Tradition",
                description: "For lovers of authentic Tunisian fashion, Wahret Zmen by Sabri is a destination where tradition meets creativity!"
              },
              {
                title: "New Space Mission Aims to Explore Distant Galaxies",
                description: "For lovers of authentic Tunisian fashion, Wahret Zmen by Sabri is a destination where tradition meets creativity!"
              }
            ]
          },

                   
          
         footer: {
        brand: "Wahret Zmen",
        description: "Explore our traditional Tunisian clothing, crafted with passion and authenticity.",
        quickLinks: "Quick Links",
        home: "Home",
        products: "Products",
        about: "About Us",
        contact: "Contact",
        contactUs: "Contact Us",
        location: "Souk Essouf, Tunis",
        followUs: "Follow Us",
        rights: "All rights reserved.",
      },

          
      // ✅ NEW: Register
      register: {
        create_account: "Create Your Account",
        email_label: "Email Address",
        email_placeholder: "Enter your email",
        email_required: "Email is required.",
        password_label: "Password",
        password_placeholder: "Enter your password",
        password_required: "Password is required.",
        register_btn: "Register",
        have_account: "Already have an account?",
        login_link: "Login",
        google_btn: "Sign up with Google",
        success_title: "Registration Successful!",
        success_text: "Welcome to Wahret Zmen Boutique.",
        error_title: "Registration Failed",
        error_text: "Please provide a valid email and password.",
        google_success_title: "Google Registration Successful!",
        google_error_title: "Google Sign-In Failed",
        continue_shopping: "Continue Shopping",
        try_again: "Try Again",
        rights: "All rights reserved."
      },

      // ✅ NEW: Login
      login: {
        title: "Welcome Back",
        email_label: "Email Address",
        email_placeholder: "Enter your email",
        email_required: "Email is required.",
        password_label: "Password",
        password_placeholder: "Enter your password",
        password_required: "Password is required.",
        login_btn: "Login",
        no_account: "Don't have an account?",
        register_link: "Register",
        google_btn: "Sign in with Google",
        success_title: "Welcome Back!",
        success_text: "You have successfully logged in.",
        error_title: "Login Failed",
        error_text: "Please provide a valid email and password.",
        google_success_title: "Google Login Successful!",
        google_error_title: "Google Sign-In Failed",
        continue_shopping: "Continue Shopping",
        try_again: "Try Again",
        rights: "All rights reserved."
      },

      admin: {
        title: "Admin Dashboard Login",
        username_label: "Username",
        username_placeholder: "Enter your username",
        username_required: "Username is required.",
        password_label: "Password",
        password_placeholder: "Enter your password",
        password_required: "Password is required.",
        login_btn: "Login",
        success_title: "Admin Login Successful!",
        success_text: "Welcome to your dashboard.",
        error_title: "Login Failed",
        error_text: "Please provide a valid username and password.",
        session_expired_title: "Session Expired",
        session_expired_text: "Please login again.",
        enter_dashboard: "Enter Dashboard",
        try_again: "Try Again",
        rights: "All rights reserved."
      },
      

      userDashboard: {
        title: "My Dashboard - Wahret Zmen",
        welcome: "Welcome, {{name}}!",
        overview: "Here is an overview of your recent orders.",
        yourOrders: "Your Orders",
        orderId: "Order ID",
        total: "Total Price",
        orderedProducts: "Ordered Products",
        quantity: "Quantity",
        color: "Color",
        original: "Original",
        noTitle: "Untitled Product",
        noOrders: "You have no recent orders.",
        defaultUser: "User"
      },

          ordersPage: {
            title: "My Orders",
            yourOrders: "Your Orders",
            noOrders: "No orders found!",
            orderNumber: "Order #",
            orderId: "Order ID",
            name: "Name",
            email: "Email",
            phone: "Phone",
            total: "Total Price",
            orderedProducts: "Ordered Products:",
            quantity: "Quantity",
            color: "Color",
            original: "Original Product",
            noTitle: "No Title",
            removeProduct: "Remove Product",
            deleteOrder: "Delete Order",
            deleting: "Deleting...",
            pleaseLogin: "Please log in to view your orders.",
            confirmDeleteTitle: "Are you sure?",
            confirmDeleteText: "This action cannot be undone. Your order will be permanently deleted.",
            confirmDeleteBtn: "Yes, delete it!",
            deleted: "Deleted!",
            orderDeleted: "Your order has been deleted.",
            error: "Error",
            orderDeleteFailed: "Failed to delete order. Please try again.",
            removeQuantityTitle: "Remove Quantity",
            removeQuantityLabel: "You have {{max}} in your order. Enter quantity to remove:",
            removeBtn: "Remove",
            cancelBtn: "Cancel",
            removed: "Removed!",
            productRemoved: "{{qty}} item(s) removed from order.",
            productRemoveFailed: "Failed to remove product. Please try again."
          },

          cart: {
            title: "Cart",
            clear_cart: "Clear Cart",
            category: "Category",
            color: "Color",
            original: "Original",
            qty: "Qty",
            remove: "Remove",
            empty: "Your cart is empty!",
            subtotal: "Subtotal",
            proceed_to_checkout: "Proceed to Checkout"
          },
          checkout: {
            title: "Secure Checkout",
            payment_method: "Cash On Delivery",
            total_price: "Total Price:",
            items: "Items",
            personal_details: "Personal Details",
            full_name: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            shipping_address: "Shipping Address",
            address: "Address / Street",
            city: "City",
            country: "Country",
            state: "State",
            zipcode: "Zipcode",
            agree: "I agree to the",
            terms: "Terms & Conditions",
            policy: "Shopping Policy",
            and: "and",
            place_order: "Place an Order",
            processing: "Processing your order...",
            order_confirmed: "Order Confirmed",
            success_message: "Your order was placed successfully!",
            go_to_orders: "Go to Orders",
            error_title: "Error!",
            error_message: "Failed to place an order"
          },
         
          
        }
      },
        
      fr: {
        translation: { 
          "navbar": {
            "brand": "Wahret Zmen"
          },
          home: "Accueil",
          products: "Produits",
          "about-menu": "À propos", // French
          "contact-menu": "Contact",
          search_input: {
            placeholder: "Rechercher des produits..."
          },
          dashboard: "Tableau de bord",
          orders: "Commandes",
          logout: "Se déconnecter",
          select_category: "Sélectionner une catégorie",
          categories: {
            all: "Tous",
            men: "Hommes",
            women: "Femmes",
            children: "Enfants",
          },
          product_filters: {
            label: "Sélectionner les produits", // French translation of the label
            men: "Hommes",
            women: "Femmes",
            children: "Enfants",
            "all": "Tous",  // French translation for "All"
},
          

          home_title: "Wahret Zmen - Vêtements traditionnels et nos vendeurs",
          home_meta_description: "Bienvenue chez Wahret Zmen, explorez notre collection de vêtements traditionnels, nos nouveautés et les dernières tendances.",
          home_intro_html: "Bienvenue à la <strong>Boutique Wahret Zmen</strong>, où la tradition rencontre l'élégance. Explorez nos vêtements faits main, inspirés du riche patrimoine culturel tunisien. Découvrez une mode intemporelle mêlant histoire et raffinement moderne.",
          home_banner_text: "Entrez dans la tradition avec élégance. La boutique Wahret Zmen vous propose une collection intemporelle de tenues tunisiennes authentiques, confectionnées avec passion et héritage.",
          our_sellers: "Nos Vendeurs",
          our_sellers_intro: "Découvrez notre collection de vêtements traditionnels, confectionnés avec soin et authenticité culturelle. Des Kaftans élégants aux Jebbas classiques, explorez la beauté du patrimoine dans chaque pièce.",
          latest_news: "Actualités & Tendances",
          latest_news_intro: "Restez informé des nouveautés de Wahret Zmen ! Découvrez nos nouvelles collections, conseils mode, et offres exclusives qui font vivre la tradition dans un monde moderne.",
          banner_img_alt: "Vêtements traditionnels tunisiens",
          banner_title: "Wahret Zmen par Sabri – Préserver l'héritage tunisien avec élégance",
          banner_description: "Wahret Zmen est une boutique unique de vêtements traditionnels tunisiens située à El Aswak, Tunis, rue Essouf. La boutique propose une sélection soignée de vêtements tunisiens authentiques, dont la célèbre Jebba, réputée pour son artisanat raffiné et sa valeur culturelle.",
          discover_now: "Découvrir maintenant",
          wahret_zmen_collection: "Collection Wahret Zmen",
          select_category: "Sélectionner une catégorie",
          no_products_found: "Aucun produit trouvé.",
          our_sellers_intro_html: "Découvrez notre collection de vêtements traditionnels, confectionnés avec soin et authenticité culturelle. Des <strong>Caftans</strong> élégants aux <strong>Jebbas</strong> classiques, explorez la beauté du patrimoine dans chaque pièce.",

          load_more: "Charger plus",
          products_page: {
            title: "Collections des produits",
            overview: "Chez Wahret Zmen, nous préservons l’essence de l’artisanat tunisien en mêlant techniques classiques et raffinement moderne. Que vous cherchiez une pièce luxueuse ou une tenue intemporelle, notre collection célèbre la beauté de la tradition."
          },

          about: {
            title: "À propos de Wahret Zmen",
            description: "Wahret Zmen est une boutique de vêtements traditionnels tunisiens qui célèbre le patrimoine à travers une mode intemporelle.",
            mission_title: "Notre Mission",
            mission_text1: "Wahret Zmen est plus qu'une boutique — c'est un hommage à l'identité tunisienne, à l'artisanat et à l'élégance. Nous sommes spécialisés dans les vêtements authentiques tels que les <strong>Jebbas</strong>, <strong>Caftans</strong>, et les robes finement brodées, fabriquées à la main par des artisans locaux.",
            mission_text2: "Chaque article de notre collection reflète des générations d'art traditionnel, soigneusement sélectionné pour les clients recherchant à la fois le style et l'authenticité culturelle. Notre vision est de préserver nos racines tout en habillant le monde de la beauté tunisienne.",
            crafted_title: "Confectionné avec Amour",
            crafted_text1: "Nos artisans utilisent des techniques traditionnelles transmises de génération en génération pour garantir que chaque article soit unique, durable et riche en détails. Des tenues de mariage aux vêtements culturels modernes, Wahret Zmen mêle héritage et élégance.",
            crafted_text2: "Chaque pièce est une œuvre de passion, cousue avec fierté, et conçue pour mettre en valeur la beauté de la culture tunisienne.",
            behind_title: "Derrière la Boutique",
            behind_text: "Entrez dans notre univers de broderies délicates et de savoir-faire ancestral. Le cœur de Wahret Zmen réside entre les mains de nos artisans talentueux.",
            join_title: "Rejoignez la Tradition",
            join_text1: "Que vous visitiez notre boutique en personne ou parcouriez notre magasin en ligne, nous vous invitons à découvrir l'esprit de la Tunisie tissé dans chaque vêtement.",
            join_text2: "Wahret Zmen est une célébration de l'héritage, de l'élégance, et de l'identité — conçue pour vous."
          },

          "contact": {
  "page_title": "Contactez-nous",
  "heading": "Contactez-nous",
  "subtitle": "N'hésitez pas à nous contacter pour toute demande.",
  "address_label": "Adresse",
  "address_value": "Souk Essouf, Tunis",
  "email_label": "Email",
  "phone_label": "Téléphone",
  "title": "Contactez la boutique Wahret Zmen",
  "description": "Des questions sur notre collection de vêtements traditionnels ? Vous recherchez un design personnalisé ou une commande spéciale ? Remplissez le formulaire ci-dessous et notre équipe vous répondra dès que possible.",
  "name_placeholder": "Votre nom",
  "email_placeholder": "Votre e-mail",
  "subject_placeholder": "Sujet",
  "message_placeholder": "Votre message",
  "send_message": "Envoyer le message",
  "sending": "Envoi...",
  "success_message": "Message envoyé avec succès !",
  "error_message": "Échec de l'envoi du message. Réessayez plus tard."
},

          

         



          stock: "Stock",
          out_of_stock: "Rupture de stock",
          trending: "Tendance",
          color: "Couleur",
          quantity: "Qté",
          add_to_cart: "Ajouter au panier",
          unknown_product: "Produit inconnu",
          category: "Catégorie",
          published: "Publié le",
          unknown: "Inconnu",
          no_description: "Aucune description disponible.",
          select_color: "Choisir une couleur",
          selected: "Sélectionné",
          default: "Défaut",
          available_colors: "Couleurs disponibles",

          news: {
            section_title: "Actualités",
            items: [
              {
                title: "Wahret Zmen par Sabri : Une boutique d'élégance tunisienne traditionnelle",
                description: "Wahret Zmen par Sabri est une boutique spécialisée dans les vêtements traditionnels tunisiens, notamment les vêtements faits main avec des broderies délicates en fil de soie."
              },
              {
                title: "Découvrez l'essence de la tradition tunisienne",
                description: "Pour les amateurs de mode tunisienne authentique, Wahret Zmen par Sabri est une destination où la tradition rencontre la créativité !"
              },
              {
                title: "Nouvelle mission spatiale visant à explorer des galaxies lointaines",
                description: "Pour les amateurs de mode tunisienne authentique, Wahret Zmen par Sabri est une destination où la tradition rencontre la créativité !"
              }
            ]
          },


          footer: {
            brand: "Wahret Zmen",
            description: "Découvrez nos vêtements traditionnels tunisiens, fabriqués avec passion et authenticité.",
            quickLinks: "Liens Rapides",
            home: "Accueil",
            products: "Produits",
            about: "À Propos",
            contact: "Contact",
            contactUs: "Nous Contacter",
            location: "Tunis, Tunisie",
            followUs: "Suivez-nous",
            rights: "Tous droits réservés.",
          },


          search_input: {
            placeholder: "Rechercher des produits..."  // French
          },

         



    
          login: {
            title: "Bon retour",
            email_label: "Adresse e-mail",
            email_placeholder: "Entrez votre e-mail",
            email_required: "L'e-mail est requis.",
            password_label: "Mot de passe",
            password_placeholder: "Entrez votre mot de passe",
            password_required: "Le mot de passe est requis.",
            login_btn: "Se connecter",
            no_account: "Vous n'avez pas de compte ?",
            register_link: "S'inscrire",
            google_btn: "Connexion avec Google",
            success_title: "Bon retour !",
            success_text: "Connexion réussie.",
            error_title: "Échec de la connexion",
            error_text: "Veuillez fournir un e-mail et un mot de passe valides.",
            google_success_title: "Connexion Google réussie !",
            google_error_title: "Échec de la connexion Google",
            continue_shopping: "Continuer vos achats",
            try_again: "Réessayer",
            rights: "Tous droits réservés."
          },

          admin: {
            title: "Connexion Administrateur",
            username_label: "Nom d'utilisateur",
            username_placeholder: "Entrez votre nom d'utilisateur",
            username_required: "Le nom d'utilisateur est requis.",
            password_label: "Mot de passe",
            password_placeholder: "Entrez votre mot de passe",
            password_required: "Le mot de passe est requis.",
            login_btn: "Se connecter",
            success_title: "Connexion administrateur réussie !",
            success_text: "Bienvenue sur votre tableau de bord.",
            error_title: "Échec de la connexion",
            error_text: "Veuillez fournir un nom d'utilisateur et un mot de passe valides.",
            session_expired_title: "Session expirée",
            session_expired_text: "Veuillez vous reconnecter.",
            enter_dashboard: "Accéder au tableau de bord",
            try_again: "Réessayer",
            rights: "Tous droits réservés."
          },
          
         userDashboard: {
  title: "Mon tableau de bord - Wahret Zmen",
  welcome: "Bienvenue, {{name}} !",
  overview: "Voici un aperçu de vos commandes récentes.",
  yourOrders: "Vos commandes",
  orderId: "ID de commande",
  total: "Prix total",
  orderedProducts: "Produits commandés",
  quantity: "Quantité",
  color: "Couleur",
  original: "Original",
  noTitle: "Produit sans titre",
  noOrders: "Vous n'avez aucune commande récente.",
  defaultUser: "Utilisateur"
},


          ordersPage: {
            title: "Mes commandes",
            yourOrders: "Vos commandes",
            pleaseLogin: "Veuillez vous connecter pour voir vos commandes.",
            noOrders: "Vous n'avez aucune commande pour le moment.",
            orderNumber: "Commande n°",
            orderId: "ID de commande",
            name: "Nom",
            email: "Email",
            phone: "Téléphone",
            total: "Prix total",
            orderedProducts: "Produits commandés",
            quantity: "Quantité",
            color: "Couleur",
            original: "Original",
            noTitle: "Produit sans titre",
            removeProduct: "Supprimer le produit",
            deleting: "Suppression...",
            deleteOrder: "Supprimer la commande",
            confirmDeleteTitle: "Êtes-vous sûr(e) ?",
            confirmDeleteText: "Cette action est irréversible. Votre commande sera définitivement supprimée.",
            confirmDeleteBtn: "Oui, supprimer !",
            deleted: "Supprimée !",
            orderDeleted: "Votre commande a été supprimée avec succès.",
            error: "Erreur",
            orderDeleteFailed: "Échec de la suppression de la commande. Veuillez réessayer.",
            removeQuantityTitle: "Supprimer une quantité",
            removeQuantityLabel: "Vous avez {{max}} dans votre commande. Entrez la quantité à supprimer :",
            removeBtn: "Supprimer",
            cancelBtn: "Annuler",
            removed: "Quantité supprimée !",
            productRemoved: "{{qty}} produit(s) supprimé(s) de votre commande.",
            productRemoveFailed: "Échec de la suppression du produit. Veuillez réessayer."
          },
          


         
          cart: {
            title: "Panier",
            clear_cart: "Vider le panier",
            category: "Catégorie",
            color: "Couleur",
            original: "Original",
            qty: "Qté",
            remove: "Supprimer",
            empty: "Votre panier est vide !",
            subtotal: "Sous-total",
            proceed_to_checkout: "Passer à la caisse"
          },
          
          checkout: {
            
            title: "Paiement à la livraison",
            total_price: "Prix total:",
            items: "Articles",
            personal_details: "Informations personnelles",
            full_name: "Nom complet",
            email: "Adresse e-mail",
            phone: "Numéro de téléphone",
            shipping_address: "Adresse de livraison",
            address: "Adresse / Rue",
            city: "Ville",
            country: "Pays",
            state: "Région",
            zipcode: "Code postal",
            "agree": "J'accepte les ",
            "terms": "Conditions générales",
            "and": " et ",
            "policy": "Conditions d'achat",
            place_order: "Passer la commande",
            processing: "Traitement de votre commande...",
            order_confirmed: "Commande confirmée",
            success_message: "Votre commande a été passée avec succès!",
            go_to_orders: "Voir les commandes",
            error_title: "Erreur!",
            error_message: "Échec de la commande"
          }
          

          
        }
      },
      
      ar: {
        translation: {
          "navbar": {
            "brand": "وهرة الزمن"
          },
          home: "الرئيسية",
          products: "المنتجات",
          "about-menu": "من نحن", // Arabic
          "contact-menu": "اتصل بنا",
          search_input: {
            placeholder: "ابحث عن المنتجات..."
          },
          dashboard: "لوحة التحكم",
          orders: "الطلبات",
          logout: "تسجيل خروج",
          select_category: "اختر الفئة",
          categories: {
            all: "الكل",
            men: "رجال",
            women: "نساء",
            children: "أطفال",
          },
          product_filters: {
            label: "اختيار المنتجات", // Arabic translation of the label
            men: "رجال",
            women: "نساء",
            children: "أطفال",
            "all": "الكل" , // Arabic translation for "All"
          
          },

          home_title: "وهرة الزمن - الملابس التقليدية وبائعونا",
          home_meta_description: "مرحبًا بكم في وهرة الزمن، استكشفوا مجموعتنا من الملابس التقليدية، والوافدات الجديدة، وآخر صيحات الموضة.",
          home_intro_html: "مرحبًا بكم في <strong>بوتيك وهرة الزمن</strong>، حيث تلتقي التقاليد بالأناقة. اكتشفوا ملابسنا المصنوعة يدويًا، المستوحاة من التراث الثقافي التونسي الغني. عيشوا تجربة أزياء خالدة تمزج بين التاريخ والرقي الحديث.",
          home_banner_text: "خطوة نحو التقاليد بأناقة. بوتيك وهرة الزمن يقدم لكم مجموعة خالدة من الأزياء التونسية الأصيلة، مصنوعة بشغف وإرث.",
          our_sellers: "بائعونا",
          our_sellers_intro: "استكشفوا مجموعتنا من الملابس التقليدية المصنوعة بعناية وأصالة ثقافية. من القفاطين الأنيقة إلى الجباب التقليدية، اكتشفوا جمال التراث في كل قطعة.",
          latest_news: "آخر الأخبار والاتجاهات",
          latest_news_intro: "ابقَ على اطلاع بآخر مستجدات وهرة الزمن! اكتشف مجموعاتنا الجديدة، ونصائح الموضة، والعروض الحصرية التي تحافظ على التقاليد في عالم عصري.",
          banner_img_alt: "الملابس التقليدية التونسية",
          banner_title: "وهرة الزمن بإدارة صبري – الحفاظ على التراث التونسي بأناقة",
          banner_description: "وهرة الزمن هي بوتيك فريد من نوعه للملابس التقليدية التونسية يقع في الأسواق، تونس، شارع الصوف. يقدم البوتيك مجموعة مختارة بعناية من الملابس التونسية الأصيلة، بما في ذلك الجبة الشهيرة المعروفة بحرفيتها الدقيقة وقيمتها الثقافية.",
          discover_now: "اكتشف الآن",
          wahret_zmen_collection: "مجموعة وهرة الزمن",
          select_category: "اختر الفئة",
          load_more: "تحميل المزيد",
          no_products_found: "لم يتم العثور على منتجات.",
          our_sellers_intro_html: "استكشفوا مجموعتنا من الملابس التقليدية المصنوعة بعناية وأصالة ثقافية. من <strong>القفاطين</strong> الأنيقة إلى <strong>الجباب</strong> التقليدية، اكتشفوا جمال التراث في كل قطعة.",

          products_page: {
            title: "مجموعة المنتجات",
            overview: "في وهرة الزمن، نحافظ على جوهر الحرفية التونسية من خلال مزج التقنيات التقليدية مع اللمسات العصرية. سواء كنت تبحث عن قطعة فاخرة لمناسبة خاصة أو زيٍّ خالد، فإن مجموعتنا مصممة لتحتفل بجمال التراث."
          },

          
          about: {
            title: "حول وهرة الزمن",
            description: "وهرة الزمن هي بوتيك ملابس تقليدية تونسية تحتفي بالإرث الثقافي من خلال أزياء خالدة.",
            mission_title: "مهمتنا",
            mission_text1: "وهرة الزمن أكثر من مجرد بوتيك — إنها تكريم للهوية التونسية، والحرف اليدوية، والأناقة. نحن متخصصون في الملابس الأصيلة مثل الجباب، القفاطين، والفساتين المطرزة يدويًا من قبل حرفيين محليين.",
            mission_text2: "كل قطعة في مجموعتنا تعكس أجيالاً من الفن التقليدي، مختارة بعناية لمن يبحثون عن الأناقة والأصالة الثقافية. رؤيتنا هي الحفاظ على الجذور بينما نلبس العالم بجمال تونسي.",
            crafted_title: "مصنوعة بحب",
            crafted_text1: "يستخدم حرفيونا تقنيات تقليدية توارثتها الأجيال لضمان أن كل قطعة فريدة، ومتينة، وغنية بالتفاصيل. من ملابس الأعراس إلى الأزياء الثقافية العصرية، تجمع وهرة الزمن بين التراث والأناقة.",
            crafted_text2: "كل قطعة عمل من الشغف، خيطت بالفخر، وصممت لتُبرز جمال الثقافة التونسية.",
            behind_title: "وراء البوتيك",
            behind_text: "ادخل إلى عالمنا من التطريز الدقيق والمهارات المتوارثة. قلب وهرة الزمن يكمن في أيدي حرفيينا المهرة.",
            join_title: "انضم إلى التقاليد",
            join_text1: "سواء كنت تزور متجرنا أو تتسوق عبر الإنترنت، نرحب بك لاكتشاف روح تونس المنسوجة في كل قطعة.",
            join_text2: "وهرة الزمن هو احتفال بالإرث، والأناقة، والهوية — صُمم لأجلك."
          },
          contact: {
            page_title: "اتصل بنا",
            heading: "اتصل بنا",
            subtitle: "لا تتردد في التواصل معنا لأي استفسار.",
            address_label: "العنوان",
            address_value: "سوق السوف، تونس",
            email_label: "البريد الإلكتروني",
            phone_label: "الهاتف"
          },

          contact: {
            title: "تواصل مع بوتيك وهرة الزمن",
            description: "هل لديك أسئلة حول مجموعتنا من الملابس التقليدية؟ تبحث عن تصميم مخصص أو طلب خاص؟ يسعدنا سماع منك! املأ النموذج أدناه وسيتواصل معك فريقنا في أقرب وقت ممكن.",
            name_placeholder: "اسمك",
            email_placeholder: "بريدك الإلكتروني",
            subject_placeholder: "الموضوع",
            message_placeholder: "رسالتك",
            send_message: "إرسال الرسالة",
            sending: "جارٍ الإرسال...",
            success_message: "تم إرسال الرسالة بنجاح!",
            error_message: "فشل في إرسال الرسالة. حاول مرة أخرى لاحقًا."
          },
          

         
          stock: "المخزون",
          out_of_stock: "غير متوفر",
          trending: "رائج",
          color: "اللون",
          quantity: "الكمية",
          add_to_cart: "أضف إلى السلة",

          unknown_product: "منتج غير معروف",
          category: "الفئة",
          published: "تاريخ النشر",
          unknown: "غير معروف",
          no_description: "لا يوجد وصف متاح.",
          select_color: "اختر اللون",
          selected: "المحدد",
          default: "افتراضي",
          available_colors: "الألوان المتوفرة",

          news: {
            section_title: "آخر الأخبار",
            items: [
              {
                title: "وهرة الزمن بإدارة صبري: بوتيك للأناقة التونسية التقليدية",
                description: "وهرة الزمن بإدارة صبري هو بوتيك متخصص في الملابس التقليدية التونسية، وخاصة الملابس المصنوعة يدويًا بتطريزات حريرية دقيقة."
              },
              {
                title: "اكتشف جوهر التقاليد التونسية",
                description: "لعشاق الأزياء التونسية الأصيلة، وهرة الزمن بإدارة صبري هو وجهة تلتقي فيها التقاليد مع الإبداع!"
              },
              {
                title: "مهمة فضائية جديدة لاستكشاف مجرات بعيدة",
                description: "لعشاق الأزياء التونسية الأصيلة، وهرة الزمن بإدارة صبري هو وجهة تلتقي فيها التقاليد مع الإبداع!"
              }
            ]
          },
          

          footer: {
            brand: "وهرة الزمن",
            description: "ملابس تقليدية تونسية تمزج بين التراث والأناقة العصرية. تقع في الأسواق، تونس.",
            quickLinks: "روابط سريعة",
            products: "المنتجات",
            about: "من نحن",
            contact: "اتصل بنا",
            contactUs: "اتصل بنا",
            location: "الأسواق، شارع الصوف، تونس، تونس",
            followUs: "تابعنا",
            rights: "جميع الحقوق محفوظة."
          },
          
          register: {
            create_account: "إنشاء حساب جديد",
            email_label: "البريد الإلكتروني",
            email_placeholder: "أدخل بريدك الإلكتروني",
            email_required: "البريد الإلكتروني مطلوب.",
            password_label: "كلمة المرور",
            password_placeholder: "أدخل كلمة المرور",
            password_required: "كلمة المرور مطلوبة.",
            register_btn: "تسجيل",
            have_account: "لديك حساب بالفعل؟",
            login_link: "تسجيل الدخول",
            google_btn: "التسجيل باستخدام جوجل",
            success_title: "تم التسجيل بنجاح!",
            success_text: "مرحبًا بك في بوتيك وهرة الزمن.",
            error_title: "فشل في التسجيل",
            error_text: "يرجى إدخال بريد إلكتروني وكلمة مرور صالحين.",
            google_success_title: "تم التسجيل عبر Google بنجاح!",
            google_error_title: "فشل تسجيل الدخول عبر Google",
            continue_shopping: "مواصلة التسوق",
            try_again: "أعد المحاولة",
            rights: "جميع الحقوق محفوظة."
          },
    
          login: {
            title: "مرحباً بعودتك",
            email_label: "البريد الإلكتروني",
            email_placeholder: "أدخل بريدك الإلكتروني",
            email_required: "البريد الإلكتروني مطلوب.",
            password_label: "كلمة المرور",
            password_placeholder: "أدخل كلمة المرور",
            password_required: "كلمة المرور مطلوبة.",
            login_btn: "تسجيل الدخول",
            no_account: "ليس لديك حساب؟",
            register_link: "إنشاء حساب",
            google_btn: "تسجيل الدخول باستخدام جوجل",
            success_title: "مرحباً بعودتك!",
            success_text: "تم تسجيل الدخول بنجاح.",
            error_title: "فشل تسجيل الدخول",
            error_text: "يرجى إدخال بريد إلكتروني وكلمة مرور صالحين.",
            google_success_title: "تم تسجيل الدخول عبر Google!",
            google_error_title: "فشل تسجيل الدخول عبر Google",
            continue_shopping: "مواصلة التسوق",
            try_again: "أعد المحاولة",
            rights: "جميع الحقوق محفوظة."
          },

          admin: {
            title: "تسجيل دخول المدير",
            username_label: "اسم المستخدم",
            username_placeholder: "أدخل اسم المستخدم",
            username_required: "اسم المستخدم مطلوب.",
            password_label: "كلمة المرور",
            password_placeholder: "أدخل كلمة المرور",
            password_required: "كلمة المرور مطلوبة.",
            login_btn: "تسجيل الدخول",
            success_title: "تم تسجيل دخول المدير بنجاح!",
            success_text: "مرحبًا بك في لوحة التحكم.",
            error_title: "فشل تسجيل الدخول",
            error_text: "يرجى إدخال اسم مستخدم وكلمة مرور صحيحة.",
            session_expired_title: "انتهت الجلسة",
            session_expired_text: "يرجى تسجيل الدخول مرة أخرى.",
            enter_dashboard: "دخول لوحة التحكم",
            try_again: "أعد المحاولة",
            rights: "جميع الحقوق محفوظة."
          },
          


          userDashboard: {
            title: "لوحة التحكم الخاصة بي - وهرة الزمن",
            welcome: "مرحباً، {{name}}!",
            overview: "إليك نظرة عامة على طلباتك الأخيرة.",
            yourOrders: "طلباتك",
            orderId: "رقم الطلب",
            total: "السعر الإجمالي",
            orderedProducts: "المنتجات المطلوبة",
            quantity: "الكمية",
            color: "اللون",
            original: "المنتج الأصلي",
            noTitle: "منتج بدون عنوان",
            noOrders: "ليس لديك طلبات حديثة.",
            defaultUser: "مستخدم"
          },
          
          

          ordersPage: {
            title: "طلباتي",
            yourOrders: "طلباتك",
            noOrders: "لا توجد طلبات!",
            orderNumber: "الطلب رقم",
            orderId: "رقم الطلب",
            name: "الاسم",
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            total: "السعر الإجمالي",
            orderedProducts: "المنتجات المطلوبة:",
            quantity: "الكمية",
            color: "اللون",
            original: "المنتج الأصلي",
            noTitle: "بدون عنوان",
            removeProduct: "إزالة المنتج",
            deleteOrder: "حذف الطلب",
            deleting: "جارٍ الحذف...",
            pleaseLogin: "يرجى تسجيل الدخول لعرض طلباتك.",
            confirmDeleteTitle: "هل أنت متأكد؟",
            confirmDeleteText: "لا يمكن التراجع عن هذا الإجراء. سيتم حذف طلبك نهائيًا.",
            confirmDeleteBtn: "نعم، احذفه!",
            deleted: "تم الحذف!",
            orderDeleted: "تم حذف طلبك.",
            error: "خطأ",
            orderDeleteFailed: "فشل في حذف الطلب. حاول مرة أخرى.",
            removeQuantityTitle: "إزالة كمية",
            removeQuantityLabel: "لديك {{max}} في طلبك. أدخل الكمية المراد إزالتها:",
            removeBtn: "إزالة",
            cancelBtn: "إلغاء",
            removed: "تمت الإزالة!",
            productRemoved: "تمت إزالة {{qty}} عنصر(عناصر) من الطلب.",
            productRemoveFailed: "فشل في إزالة المنتج. حاول مرة أخرى."
          },
          cart: {
            title: "عربة التسوق",
            clear_cart: "تفريغ العربة",
            category: "الفئة",
            color: "اللون",
            original: "أصلي",
            qty: "الكمية",
            remove: "إزالة",
            empty: "عربة التسوق فارغة!",
            subtotal: "المجموع الفرعي",
            proceed_to_checkout: "المتابعة للدفع"
          },
          

          checkout: {
            title: "إتمام الطلب الآمن",
            payment_method: "الدفع عند الاستلام",
            total_price: "السعر الإجمالي:",
            items: "المنتجات",
            personal_details: "المعلومات الشخصية",
            full_name: "الاسم الكامل",
            email: "البريد الإلكتروني",
            phone: "رقم الهاتف",
            shipping_address: "عنوان الشحن",
            address: "العنوان / الشارع",
            city: "المدينة",
            country: "الدولة",
            state: "المنطقة",
            zipcode: "الرمز البريدي",
            agree: "أوافق على",
            terms: "الشروط والأحكام",
            policy: "سياسة الشراء",
            and: "و",
            place_order: "إتمام الطلب",
            processing: "جارٍ معالجة طلبك...",
            order_confirmed: "تم تأكيد الطلب",
            success_message: "تم إرسال طلبك بنجاح!",
            go_to_orders: "عرض الطلبات",
            error_title: "خطأ!",
            error_message: "فشل في إرسال الطلب"
          }
          

          
        }
      }
    },
         lng: localStorage.getItem("language") || "fr", // ✅ force fr by default
  fallbackLng: "fr",                             // ✅ fallback in fr

  

  interpolation: {
    escapeValue: false
  }
});

export default i18n;

