export const handler = async () => {
    const POKE_API = 'https://nsfestival.fr/wp-json/wp/v2/media'
  
    const response = await fetch(POKE_API)
    const data = await response.json()
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        data
      })
    }
  }