export function validateCSS(inputCSS, solutionCSS) {
  const userStyles = {}
  inputCSS.split(";").forEach(rule => {
    const [prop, val] = rule.split(":").map(s => s?.trim())
    if (prop && val) userStyles[prop] = val
  })

  return Object.entries(solutionCSS).every(
    ([prop, val]) => userStyles[prop] === val
  )
}
