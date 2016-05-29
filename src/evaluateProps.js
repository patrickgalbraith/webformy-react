// Evaluate property based on current context
export const evaluateProp = (prop, context) => {
  if (typeof(prop) === 'function') {
    return prop.call(null, context)
  }

  return prop
}

export const evaluateProps = (props, context) => {
  for (var k in props) {
    props[k] = evaluateProp(props[k], context)
  }

  return props
}