# UserMedia

> The [MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) method prompts the user for permission to use a media input which produces a MediaStream with tracks containing the requested types of media. That stream can include, for example, a video track (produced by either a hardware or virtual video source such as a camera, video recording device, screen sharing service, and so forth), an audio track (similarly, produced by a physical or virtual audio source like a microphone, A/D converter, or the like), and possibly other track types.

## State

The `useUserMedia` function exposes the following reactive state:

```js
import { useUserMedia } from 'vue-use-web';

const { promise, error } = useUserMedia({ audio: true, video: true });
```

| State   | Type                          | Description                                                |
| ------- | ----------------------------- | ---------------------------------------------------------- |
| promise | `Promise<MediaStream> | null` | A promise resolving with the media stream object.          |
| error   | `Error | null`                | An error instance, for example if constraints are invalid. |

## Config

`useUserMedia` function accepts an object that has the type of [`MediaStreamConstraints`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints).

```js
import { useUserMedia } from 'vue-use-web';

const constraints = { audio: true, video: false };

const { promise } = useUserMedia(constraints);
```

| Config      | Type                                                                                                                               | Description |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| constraints | [`MediaStreamConstraints`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints)` | A media constraints object. |

## Example

This example pipes the stream from the promise to a audio element to play the live audio stream.

```vue
<template>
  <div>
    <audio controls ref="vod"></audio>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useUserMedia } from 'vue-use-web';

export default {
  setup() {
    const vod = ref(null);
    console.log(
      useUserMedia({
        audio: true,
        video: false
      }).promise.value.then(stream => {
        vod.value.srcObject = stream;
      })
    );

    return {
      vod
    };
  }
};
</script>
```

TODO: Live Demo
