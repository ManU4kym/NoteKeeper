

export default defineNuxtRouteMiddleware (async (event) => {

    if (process.client) return
    const{ $verifyJwtToken } = useNuxtApp()

  const cooks = useCookie('NoteKeepJWT')

  if (!cooks.value) {
   return navigateTo('/register')
  }

 try { 
  await $verifyJwtToken(cooks.value, process.env.JWT_SECRET_KEY)
 } catch (err) {
    navigateTo('/register')
    
 
 }
  console.log(cooks)
})