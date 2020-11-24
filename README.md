# React Watermark Component

![version](https://badge.fury.io/js/%40hirohe%2Freact-watermark.svg)


A React Component to wrap watermark text on child component, using generated svg as background-image

## Usage:

> this Component requires react version >=16.8.0, in order to use react hook feature

```bash
yarn add @hirohe/react-watermark
# or
npm i --save @hirohe/react-watermark
```

e.g.

```jsx
import { Watermark } from '@hirohe/react-watermark';

const ContentWithWatermark = () => (
  <Watermark text="Mark">
    <div style={{ width: 500, height: 500, backgroundColor: '#5f5f5f' }}>
      Lorem ipsum
    </div>
  </Watermark>
)
```

![example](https://github.com/hirohe/react-watermark/raw/master/doc/example.png)


## Props

| prop         | description                    | type         | default                      |
|--------------|--------------------------------|--------------|------------------------------|
| show         | show watermark or not          | boolean      | true                         |
| text         | watermark text                 | string       | -                            |
| textColor    | color of watermark             | color string | #cccccc                      |
| textSize     | watermark text size in px unit | number       | 24                           |
| fontFamily   | watermark text font-family     | string       | Arial, Helvetica, sans-serif |
| opacity      | watermark text opacity         | number       | 0.2                          |
| rotate       | watermark text rotate degree   | number       | -45                          |
| gutter       | gutter between watermark text  | number       | 0                            |
| wrapperStyle | style of div wrapper           | number       | -                            |


## TODO

- [ ] multiline watermark text
- [x] adjustable space between watermark


## License
MIT License. See `LICENSE.txt` for more information.
