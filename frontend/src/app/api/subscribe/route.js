export async function POST(req) {
    try {
      // Obtener el correo de la solicitud
      const { email } = await req.json();
  
      if (!email) {
        return new Response(JSON.stringify({ message: 'Correo requerido' }), { status: 400 });
      }
  
      // Solo logueamos el correo en la consola por ahora
      console.log('Correo recibido:', email);
  
      // Devolver una respuesta exitosa
      return new Response(JSON.stringify({ message: 'Suscripción exitosa' }), { status: 200 });
    } catch (error) {
      console.error('Error en la suscripción:', error);
      return new Response(JSON.stringify({ message: 'Hubo un error al suscribirse' }), { status: 500 });
    }
  }
  