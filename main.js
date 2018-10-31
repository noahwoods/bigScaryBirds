// make a bird class
class FeatheredTerror {

  constructor(props) {
    this.height = props.height
    this.flightless = props.flightless
    this.isExtinct = props.isExtinct
    this.name = props.name
    this.runningSpeed = props.runningSpeed

  }

  toString() {
  return `The ${this.name} is a big, scary bird that stands up to ${this.height} ft. and can run ${this.runningSpeed} mph!`
  
}
}

const ostrichProperties = {
  height: "9.2",
  flightless: true,
  isExtinct: false,
  name: "Ostrich",
  runningSpeed: "43"
}

const ostrich = new FeatheredTerror(ostrichProperties)

const emuProperties = {
  height:"6.2",
  flightless: true,
  isExtinct: false,
  name: "Emu",
  runningSpeed: "32"
}

const emu = new FeatheredTerror(emuProperties)

const empPenguinProperties = {
  height:"4",
  flightless: true,
  isExtinct: false,
  name: "Emperor Penguin",
  runningSpeed: "unknown",
}

const empPenguin = new FeatheredTerror(empPenguinProperties)

console.log(Emu.toString())




