export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/#home',
    showOnProjects: true,
  },
  {
    id: 2,
    name: 'About',
    href: '/#about',
    showOnProjects: false,
  },
  {
    id: 3,
    name: 'Work',
    href: '/#work',
    showOnProjects: false,
  },
  {
    id: 4,
    name: 'Contact',
    href: '/#contact',
    showOnProjects: false,
  },
  {
    id: 5,
    name: 'Project',
    href: '/projects',
    showOnProjects: false,
  },
];
export const projectOptions = [
  { value: 'react', label: '⚛️ React' },
  { value: 'angular', label: '📐 Angular' },
  { value: 'dotnet_core', label: '🌐 .NET Core' },
  { value: 'power_bi', label: '📊 Power BI' },
  { value: 'personal', label: '👤 Personal' },
  { value: 'freelance', label: '💼 Freelance' },
  { value: 'machine_learning', label: '🤖 Machine Learning' },
  { value: 'semester', label: '📚 Semester' },
  { value: 'three.js', label: '🎨 Three.js' },
  { value: 'fabric.js', label: '🖍️ Fabric.js' },
  { value: 'python', label: '🐍 Python' },
  { value: 'tensorflow', label: '🧠 TensorFlow' },
  { value: 'computer_vision', label: '👁️ Computer Vision' },
  { value: 'algorithms', label: '🧩 Algorithms' },
  { value: 'postman', label: '🚀 Postman API Testing' },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Naveed Ahmed',
    position: 'CEO / Founder at Qualix@Solutions',
    img: 'assets/male-avatar-1.png',
    review:
      'Sulaiman is an exceptionally talented and dedicated software engineer with an outstanding work ethic. His problem-solving abilities are top-notch and he consistently excels as a team player. With his skills and drive, he has an incredibly bright future, and any organization would be fortunate to have him on their team.',
  },
  {
    id: 2,
    name: 'Muzz Imam',
    position: 'Product Manager at SnowFlake',
    img: 'assets/male-avatar-2.png',
    review:
      'Sulaiman is an exceptional professional with outstanding analytical and problem-solving skills. They have a remarkable ability to identify challenges and find effective solutions quickly. Their dedication and expertise is valuable. It’s a pleasure working with such a talented individual..',
  },
  {
    id: 3,
    name: 'Faraz Ahmed',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/male-avatar-3.png',
    review:
      'I can’t say enough good things about Sulaiman. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Haris Khan',
    position: 'BPM Specialist at GBM',
    img: 'assets/male-avatar-4.png',
    review:
      'Sulaiman was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
  {
    id: 5,
    name: 'Fazal Rehman',
    position: 'Product Manager at MindCloud',
    img: 'assets/male-avatar-5.png',
    review:
      'I’ve had the pleasure of working with Sulaiman, and I can confidently say he is an exceptional junior developer. His ability to debug complex issues is truly impressive—he has a keen eye for spotting problems and finding efficient solutions. Beyond his technical skills, Sulaiman is a natural leader, managing and guiding other developers with confidence and clarity. He’s also a fantastic team player, always ready to collaborate and support his teammates. With his dedication and talent, I have no doubt he’ll continue to grow and make a significant impact in the industry!',
  },
];

export const myProjects = [
  {
    title: 'AlogoViz  - Algorihtm Visualizer',
    desc: 'AlgoViz is a powerful learning and educational tool designed to visualize algorithms in action. Developed as a semester project for the Algorithms course, it takes an array of numbers as a file input and runs around 10 different algorithms, helping users gain a deeper understanding of their logic and performance through interactive, real-time visualizations.',
    subdesc:
      'Built as a unique learning and educational tool with React.js, Tailwind CSS, and JavaScript, AlgoViz provides an interactive and intuitive way to visualize algorithms in action.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/algoviz.png',
    logoStyle: {
      backgroundColor: '#909090',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    githubRepo: true,
    moreDetails: true,
    checkLiveSite: false,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
    tagsList: ['react', 'javascript', 'tailwindcss', 'semester'],
    images: [
      {
        id: 1,
        src: '/assets/algoviz-gif-1.gif',
        alt: 'algoviz gif',
        isVideo: false,
      },
      {
        id: 2,
        src: '/assets/algoviz-video-1.mp4',
        alt: 'algoviz video',
        isVideo: true,
      },
    ],
    summaryPoints: [
      'Implemented popular sorting algorithms with step-by-step visualization.',
      'Includes O(N), O(N²), and O(log N) time complexity algorithms for comparison.',
      'Allows sorting one step at a time using a forward button for better understanding.',
      'Users can set sorting speed and toggle play/pause for a dynamic experience.',
      'Supports input via a comma-delimited array of numbers from a file.',
      'Generates a file with sorted output using a dedicated "Generate" button.',
    ],
  },
  {
    title: 'Kohif Pharmagenix - Providing Tailored Medications',
    desc: 'Kohif Pharmagenix is a platform for providing tailored medications. I developed the provider and patient portal for Kohif Pharmagenix, enabling patients to submit and track their reports and medications, while providers can upload, receive, and manage lab test requests efficiently. ',
    subdesc:
      'Built using React.js with Context API for state management, Tailwind CSS for the frontend, and a .NET 6 API, Entity Framework, SQL server with clean architecture and Razor implementation, this platform ensures seamless, efficient user collaboration.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/kohif.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    githubRepo: false,
    moreDetails: true,
    checkLiveSite: true,
    liveSiteUrl: 'https://tailormyrx.com/',
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: '.NET 6',
        path: '/assets/NETCore.png',
      },
    ],
    tagsList: ['react', 'typescript', 'freelance', 'dotnet_core'],
    images: [],
    summaryPoints: [
      'Integrates third-party APIs for enhanced functionality and data exchange.',
      'Implements cookie-based OAuth for secure authentication and session management.',
      'Generates detailed reports in PDF and Excel formats for data analysis and sharing.',
      'Builds dynamic forms to handle varied user inputs with flexible validation and customization.',
    ],
  },
  {
    title: 'Transparency - Providing Language Translation Services',
    desc: 'Transparency Web is a platform for language translation services, allowing translators to sign in, view available jobs posted by admins, and either accept or reject them. It streamlines the process for both translators and clients, offering a seamless experience for job management and communication.',
    subdesc:
      'Built with React.js and TypeScript for the frontend, and a .NET 8 API for the backend, Transparency Web also includes email management and online chatting features, ensuring smooth communication and efficient job management.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/transparency.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    githubRepo: false,
    moreDetails: true,
    checkLiveSite: true,
    liveSiteUrl: 'https://transparencylanguage.com/',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: '.NET Core',
        path: '/assets/NETCore.png',
      },
    ],
    tagsList: ['react', 'freelance', 'typescript', 'dotnet_core'],
    images: [],
    summaryPoints: [
      'Implements secure JWT authentication for user authorization and access control.',
      'Generates template-formatted PDFs dynamically with structured data.',
      'Provides a custom email inbox for managing and processing emails efficiently.',
      'Enables offline chat functionality with real-time sync upon reconnection.',
      'Integrates real-time notifications for important updates and user interactions.',
      'Used Chakra UI for out-of-the-box components, ensuring a sleek and accessible UI.',
    ],
  },
  {
    title: 'Data Visualizations using PowerBI Dashboards',
    desc: 'The Power BI dashboards provide comprehensive visualizations of Pakistan social living measurement data. Covering areas from education and demographics to financials for a sample population, these dashboards offer valuable insights into various socio-economic factors.',
    subdesc:
      'Used R language to preprocess data, then imported CSV files into Power BI. Utilized DAX queries to enable dynamic data visualizations across dashboards',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-powerbi.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    githubRepo: false,
    moreDetails: true,
    checkLiveSite: false,
    tags: [
      {
        id: 1,
        name: 'R',
        path: '/assets/Rlogo.png',
      },
      {
        id: 2,
        name: 'PowerBI',
        path: 'assets/powerbi.png',
      },
    ],
    tagsList: ['power_bi', 'r'],
    summaryPoints: [
      'Implemented ETL processes, preprocessing, and formatting in R using R Studio.',
      'Performed statistical data analysis using advanced R packages.',
      'Imported  transformed CSV data into a specific format for Power BI.',
      'Developed data models and established relationships using Power BI’s built-in data modeller.',
    ],
    images: [
      {
        id: 1,
        src: '/assets/powerbi-img-1.JPG',
        alt: 'powerbi dashboard',
        isVideo: false,
      },
      {
        id: 2,
        src: '/assets/powerbi-img-2.JPG',
        alt: 'powerbi dashboard',
        isVideo: false,
      },
      {
        id: 3,
        src: '/assets/powerbi-img-3.JPG',
        alt: 'powerbi dashboard',
        isVideo: false,
      },
      {
        id: 4,
        src: '/assets/powerbi-img-4.JPG',
        alt: 'powerbi dashboard',
        isVideo: false,
      },
      {
        id: 5,
        src: '/assets/powerbi-img-5.JPG',
        alt: 'powerbi dashboard',
        isVideo: false,
      },
    ],
  },

  {
    title: 'Diecast Car Collectors Hub – Ecommerce Platform ',
    desc: "Launching soon, Diecast Car Collector’s Hub is a one-stop ecommerce platform for purchasing and requesting diecast cars. Whether you're a passionate collector or a first-time buyer, the platform streamlines the process, making it easy to explore, purchase, and even request specific diecast cars.",
    subdesc:
      'Built with Angular 16, .NET 8, Clean Architecture, and Tailwind CSS, the platform ensures a seamless user experience, combining robust technology with an intuitive interface for enthusiasts and collectors alike.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/no-image-icon.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    githubRepo: false,
    moreDetails: false,
    checkLiveSite: false,
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Angular',
        path: '/assets/angular.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'NET Core',
        path: 'assets/NETCore.png',
      },
    ],
    images: [],
    tagsList: ['dotnet_core', 'angular', 'tailwindcss'],
  },

  {
    title: 'Learning Postman API Testing',
    desc: "Launching soon, Diecast Car Collector’s Hub is a one-stop ecommerce platform for purchasing and requesting diecast cars. Whether you're a passionate collector or a first-time buyer, the platform streamlines the process, making it easy to explore, purchase, and even request specific diecast cars.",
    subdesc:
      'Built with Angular 16, .NET 8, Clean Architecture, and Tailwind CSS, the platform ensures a seamless user experience, combining robust technology with an intuitive interface for enthusiasts and collectors alike.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/postman-logo.svg',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    githubRepo: false,
    moreDetails: true,
    checkLiveSite: true,
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Postman',
        path: '/assets/postman-logo.svg',
      },
    ],
    images: [
      {
        id: 1,
        src: '/assets/image1.jpg',
        alt: 'React.js logo',
        isVideo: false,
      },
      {
        id: 2,
        src: '/assets/image2.jpg',
        alt: 'TailwindCSS logo',
        isVideo: false,
      },
      {
        id: 3,
        src: '/assets/image3.jpg',
        alt: 'TypeScript logo',
        isVideo: false,
      },
    ],
    tagsList: ['postman'],
    summaryPoints: [
      'Automate REST APIs using JSON parsing and SOAP WebServices with XML in Postman.',
      'Utilize Postman features like environments, variables, workflows, and data-driven testing.',
      'Run automated tests using Newman CLI and integrate with Jenkins for CI/CD.',
      'Collaborate on Postman projects with version control and generate detailed HTML reports.',
    ],
  },
  {
    title: 'Skimify - NLP Project',
    desc: 'This NLP project processes medical text extracts and generates concise summaries. It uses advanced natural language processing techniques to analyze the content and capture key information. The goal is to assist healthcare professionals by providing quick, digestible insights from medical documents.',
    subdesc:
      'Built using Python and the TensorFlow framework, with development carried out on Google Colab for seamless cloud-based processing. ',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/skimify-logo.png',
    githubRepo: true,
    moreDetails: false,
    checkLiveSite: false,
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'python',
        path: '/assets/python.jpg',
      },
      {
        id: 2,
        name: 'tensorflow',
        path: 'assets/tensorflow-logo.png',
      },
    ],
    tagsList: ['python', 'tensorflow', 'personal'],
    images: [],
    summaryPoints: [
      'Utilizes state-of-the-art NLP models for accurate text summarization.',
      'Processes medical extracts to generate concise and meaningful summaries.',
      'Built using Python, TensorFlow, and deployed on Google Colab.',
      'Efficiently handles large medical documents with optimized performance.',
      'Provides structured output for easier interpretation by healthcare professionals.',
    ],
  },
  {
    title: 'Foodie-AI ',
    desc: 'An Image classification project as part of my semester project, implementing the architecture from the DeepFood paper. The model is designed to classify food images accurately. Users can upload any food image, and the system will provide a classification output, identifying the type of food in the image.',
    subdesc:
      'built using Python and TensorFlow, with development carried out on Google Colab for efficient cloud-based processing. ',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/food-image.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    githubRepo: true,
    moreDetails: true,
    checkLiveSite: false,
    tags: [
      {
        id: 1,
        name: 'python',
        path: '/assets/python.jpg',
      },
      {
        id: 2,
        name: 'tensorflow',
        path: 'assets/tensorflow-logo.png',
      },
    ],
    tagsList: ['python', 'tensorflow'],
    images: [],
    summaryPoints: [
      'Utilized TensorFlow Library with the Food101 dataset containing 101 food categories and 1,000 images per class.',
      'Developed a feature extraction model using Keras EfficientNetB0 benchmark model.',
      'Fine-tuned the model with all layers trainable, improving feature learning.',
      'Implemented mixed precision training for 3x faster training time.',
      'Optimized TensorFlow data input pipelines for improved performance.',
      'Trained for 100 epochs with train-test split evaluation.',
      'Achieved 80% accuracy with the fine-tuned model, outperforming the feature extraction model (70%) and DeepFood paper (76%).',
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    cubicleRadius: isSmall ? 8 : isMobile ? 8 : isTablet ? 8 : 9,
    deskFov: isSmall ? 70 : isMobile ? 70 : isTablet ? 60 : 55,
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Think Digitally',
    pos: 'Software Engineer',
    duration: 'July 2025 - Present',
    point1:
      'Leveraging Azure services including Blob Storage, Redis, and Queue Service for typical Application features',
    point2: 'Working with Clean and Modular Monolith Architectures',
    point3: 'Developing Application FrontEnd using DevExtreme Library',
    point4: 'Writing Unit Tests in NUnit , Using Fluent Assertions',
    icon: '/assets/thinkdigitally.jpg',
    animation: 'victory',
    tags: [
      { id: 1, text: 'Azure', color: 'bg-blue-600' },
      { id: 2, text: 'NUnit', color: 'bg-green-600' },
      { id: 3, text: '.NET 6', color: 'bg-purple-600' },
      { id: 4, text: 'DevExtreme', color: 'bg-orange-500' },
      { id: 5, text: 'Entity Framework', color: 'bg-green-500' },
      { id: 6, text: 'MS SQL', color: 'bg-gray-500' },
    ],
  },
  {
    id: 2,
    name: 'Engineering Optimzation Software',
    pos: 'Web Developer',
    duration: 'Dec 2022 - May 2024',
    point1: 'Performed Migration from .NET Framework to .NET 6',
    point2: 'Facilitated Code Conversion from Fortan to C# 10',
    point3: 'Built interactive visualizations using JavaScript,Fabric.js, Three.js',
    point4: 'Developed Backend API,s Working with MVC and MVVM (Razor_ Architecture)',
    icon: '/assets/VIP_Icon.bmp',
    animation: 'clapping',
    tags: [
      { id: 1, text: 'Razor', color: 'bg-blue-500' },
      { id: 2, text: 'Fabric.js', color: 'bg-green-500' },
      { id: 3, text: 'C# 10', color: 'bg-purple-500' },
      { id: 4, text: 'Entity Framework', color: 'bg-green-500' },
      { id: 5, text: 'MySQL', color: 'bg-gray-500' },
    ],
  },
];
export const items = [
  { id: 1, url: 'assets/angular-course.jpg' },
  { id: 2, url: 'assets/react-course.jpg' },
  { id: 3, url: 'assets/AWS.jpg' },
  { id: 4, url: 'assets/sulaiman-tensorflow.jpg' },
  { id: 5, url: 'assets/unittesting.jpg' },
  { id: 6, url: 'assets/cybersecuritycourse.jpg' },
  { id: 7, url: 'assets/webpenetration.jpg' },
  { id: 8, url: 'assets/docker.jpg' },
  { id: 9, url: 'assets/datascience.jpg' },
  { id: 10, url: 'assets/EF_Core.jpg' },
];
