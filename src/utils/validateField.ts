export const validateField = (name: string, value: any) => {
  switch (name) {
    case "email": {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return !emailRegex.test(value)
    }
    case "mobile": {
      const regex = /^\d{10}$/
      return !regex.test(value)
    }
    case "text": {
      const regex = /^[A-Za-z ]{1,40}$/
      return !regex.test(value)
    }
    case "firstName": {
      const regex = /^[A-Za-z ]{1,20}$/
      return !regex.test(value)
    }
    case "lastName": {
      const regex = /^[A-Za-z ]{1,30}$/
      return !regex.test(value)
    }
    default: {
      return false
    }
  }
}
