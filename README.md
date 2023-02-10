# adacon.no

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)

_Ada Lovelace Conference 2023 in Oslo_

<https://adacon.no>

## Running with docker

See <https://github.com/Starefossen/docker-github-pages>:

    docker run -it --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages

The page will be available on <http://localhost:4000/23/dev.html>.

### CSS optimization

> _Note:_ This is done automatically on GitHub [using an Action](./.github/workflows/uncss.yaml)

In order to create a CSS file with only the necessary styles, we use [`uncss`](https://github.com/uncss/uncss).

    npm ci
    npx uncss http://127.0.0.1:4000/23/dev.html > 23/theme.uncss.css

You can test the result on <http://localhost:4000/23/>.

## Edit Images

Images are stored on the [Sanity.io](https://sanity.io) CDN, you need to run the Studio to edit images. The instructions are in the [Adacon Sanity Studio](https://github.com/tech-women/adacon-sanity.git).

## Credits

Design based on the awesome [DevConf theme](https://github.com/xriley/DevConf-Theme)
by
[Xiaoying Riley](http://themes.3rdwavemedia.com), which has been adapted for Jekyll/GitHub here.
