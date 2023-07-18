import React from 'react'
import { ToucheableOpacity,Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
  <ToucheableOpacity style={styles.btnContainer} onPress={handlePress}>
    <Image
    source={iconUrl}
    resizeMode="cover"
    style={styles.btnImg(dimension)}
    />

    </ToucheableOpacity>
  )
}

export default ScreenHeaderBtn