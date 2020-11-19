# React Watermark Component

---

A React Component to wrap watermark text on child component, using generated svg as background-image

## Usage:

> this Component requires react version >=16.8.0, in order to use react hook feature

```jsx
const ContentWithWatermark = () => (
  <Watermark text="Mark">
    <div style={{ width: 500, height: 500, backgroundColor: '#5f5f5f' }}>
      Lorem ipsum
    </div>
  </Watermark>
)
```

![example](./doc/example.png)

---

## Props

| prop      | description                    | type         | default |
|-----------|--------------------------------|--------------|---------|
| text      | watermark text                 | string       | -       |
| textColor | color of watermark             | color string | #cccccc |
| textSize  | watermark text size in px unit | number       | 24      |
| opacity   | watermark text opacity         | number       | 0.2     |


## TODO

- [ ] custom font-family
- [ ] multiline watermark text
- [ ] adjustable space between watermark


## License
MIT License. See `LICENSE.txt` for more information.
