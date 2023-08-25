<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/raymondkneipp/multi-tenant-via-subdomain">
    <img src="public/icon.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">multi-tenant-via-subdomain</h3>

  <p align="center">
  Demo app I built to display information from a mock database depending on the subdomain. This basic concept can be used to implement multi-tenant architecture into any app.
    <br />
    <a href="https://github.com/raymondkneipp/multi-tenant-via-subdomain"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/raymondkneipp/multi-tenant-via-subdomain/issues">Report Bug</a>
    ·
    <a href="https://github.com/raymondkneipp/multi-tenant-via-subdomain/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Multi-Tenant Demo Screen Shot][product-screenshot]

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

For more information read [my blog post about multi-tenant architecture](https://2022.raymondkneipp.com/posts/3-multi-tenant-architecture). To get a local copy up and running follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/raymondkneipp/multi-tenant-via-subdomain.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start local server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Visiting different subdomains will display different information from a mock database.

| URL                                                                          | Results         |
| ---------------------------------------------------------------------------- | --------------- |
| [http://localhost:3000](http://localhost:3000)                               | default page    |
| [http://rfkquery.localhost:3000](http://rfkquery.localhost:3000)             | @rfkquery page  |
| [http://wesbos.localhost:3000](http://wesbos.localhost:3000)                 | @wesbos page    |
| [http://stolinski.localhost:3000](http://stolinski.localhost:3000)           | @stolinski page |
| [http://does.not.exist.localhost:3000](http://does.not.exist.localhost:3000) | error page      |
| [http://does-not-exist.localhost:3000](http://does-not-exist.localhost:3000) | error page      |

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- RESOURCES -->

## Resources

For more information about creating a multi-tenant app visit the following links

- [Blog post about multi-tenant architecture](https://www.raymondkneipp.com/posts/3-multi-tenant-architecture)
- [Vercel Platforms Starter Kit](https://vercel.com/guides/nextjs-multi-tenant-application)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Raymond Kneipp - [@rfkquery](https://twitter.com/rfkquery) - hello@raymondkneipp.com

Project Link: [https://github.com/raymondkneipp/multi-tenant-via-subdomain](https://github.com/raymondkneipp/multi-tenant-via-subdomain)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/raymondkneipp/multi-tenant-via-subdomain.svg?style=for-the-badge
[contributors-url]: https://github.com/raymondkneipp/multi-tenant-via-subdomain/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/raymondkneipp/multi-tenant-via-subdomain.svg?style=for-the-badge
[forks-url]: https://github.com/raymondkneipp/multi-tenant-via-subdomain/network/members
[stars-shield]: https://img.shields.io/github/stars/raymondkneipp/multi-tenant-via-subdomain.svg?style=for-the-badge
[stars-url]: https://github.com/raymondkneipp/multi-tenant-via-subdomain/stargazers
[issues-shield]: https://img.shields.io/github/issues/raymondkneipp/multi-tenant-via-subdomain.svg?style=for-the-badge
[issues-url]: https://github.com/raymondkneipp/multi-tenant-via-subdomain/issues
[license-shield]: https://img.shields.io/github/license/raymondkneipp/multi-tenant-via-subdomain.svg?style=for-the-badge
[license-url]: https://github.com/raymondkneipp/multi-tenant-via-subdomain/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/raymondkneipp
[product-screenshot]: public/screenshot.png
