import React from 'react'
 import { Card, Metric, Text, Color } from '@tremor/react'

 type Props = {
  title: string;
  metric: string;
  color?: Color;
  
}


const StateCard = ({title, color, metric}: Props) => {
  return (
    <Card decoration='top' decorationColor={color} >
        <Text>{title}</Text>
        <Metric>{metric}</Metric>
    </Card>
  )
}

export default StateCard