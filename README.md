<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ronaldosena/vscode-remote-containers/commits/">
    <img src="assets/instagram-clone.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Instagram clone</h3>

  <p align="center">
    An attempt to practice react native by cloning the instagram app
    <br />
    <a href="https://github.com/ronaldosena/vscode-remote-containers/commits/"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ronaldosena/vscode-remote-containers/assets/instagram-clone.png">View Demo</a>
    ·
    <a href="https://github.com/ronaldosena/vscode-remote-containers/issues">Report Bug</a>
    ·
    <a href="https://github.com/ronaldosena/vscode-remote-containers/LICENSE.md">View License</a>
  </p>
</div>

## About The Project

[![Instagram clone][demo-gif]](https://example.com)

This is a hands-on learning project to pratice my react-native skills. The project is a “poor man’s” version of Instragram, but with some cool features such as:

- Image upload to Cloudinary;
- Data storage with API calls;
- Camera integration;

The basic functionalities are working, but there is a lot of work to be done!

### Built With

- [React Native](https://reactnative.dev/)
- [Json Server](https://github.com/typicode/json-server)
- [Cloudinary](https://cloudinary.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

This is a list of things you need to run the project:

- JSON Server

```sh
  npm install -g json-server
```

### Installation

1. Get a free API Key at [Cloudinary](https://cloudinary.com/documentation)
2. Clone the repo
   ```sh
   git clone https://github.com/ronaldosena/instragram-clone.git
   ```
3. Install dependencies
   ```sh
   yarn
   ```
4. Create a `.env` file and fill with your data
   ```sh
   cp .env.example .env
   ```

<!-- USAGE EXAMPLES -->

## Usage

Spin up your JSON server

```sh
  json-server --watch --host <YOUR_LOCAL_IP> db.json
```

Run android

```sh
  npx react-native run-android
```

## Roadmap

- [x] Project kick-off
- [ ] Finish Profile screen
- [ ] Implement login screen
- [ ] Add "components" folder to easily reuse code
- [ ] Multi-language Support
  - [ ] English
  - [ ] Portuguese
- [ ] Implement redux

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

<!-- LICENSE -->

## License

Distributed under the Coffeware License. See [`LICENSE.md`](https://github.com/ronaldosena/instragram-clone/LICENSE.md) for more information.

<!-- CONTACT -->

## Contact

You can reach me out at [@roronalds\_](https://twitter.com/roronalds_) or send an e-mail to ronaldo.sena@outlook.com

<p align="right"><a href="#top">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->

[demo-gif]: assets/instagram-clone.gif
