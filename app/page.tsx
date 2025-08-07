import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award, Phone, Mail, MapPin, Facebook, Linkedin, CheckCircle, Star, Gavel, Search, FileText, Eye, Target, Heart } from 'lucide-react'
import Link from "next/link"
// Removed: import { TwitterIcon as TikTok } from 'lucide-react' as we're using a custom image
import ContactForm from '@/components/contact-form'

export default function EstudioCriminalisticoLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/images/ecp-logo.jpg"
                alt="Estudio Criminalístico Perú Logo"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold">Estudio Criminalístico Perú</h1>
                <p className="text-sm text-slate-300">Servicios Jurídicos y Periciales</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#inicio" className="hover:text-red-500 transition-colors">
                Inicio
              </a>
              <a href="#nosotros" className="hover:text-red-500 transition-colors">
                Nosotros
              </a>
              <a href="#servicios" className="hover:text-red-500 transition-colors">
                Servicios
              </a>
              <a href="#contacto" className="hover:text-red-500 transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden"
        style={{
          backgroundImage: `url('/images/crime-scene-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 text-white text-lg px-6 py-2 animate-fade-in animation-delay-[0.2s]">
              Perú con Nuevas Visiones Criminalísticas
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight animate-fade-in animation-delay-[0.4s] md:text-6xl tracking-normal">
              ¿Buscas peritajes profesionales o defensa legal confiable? <span className="text-red-500">{""}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto animate-fade-in animation-delay-[0.6s]">
              Somos el estudio criminalístico líder en el Perú. Con peritos y abogados certificados, resolvemos casos con precisión, ética y resultados comprobados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-[0.8s]">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg"
                asChild>
                <Link href="https://wa.me/51950711770?text=Hola,%20me%20interesa%20solicitar%20una%20consulta%20gratuita%20sobre%20sus%20servicios%20jurídicos%20y%20periciales." target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Consulta gratuita
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Sobre Nosotros</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Somos una empresa que brinda servicios jurídicos y periciales, avalada por el centro jurídico GRANDA &
                MONTES, con peritos y abogados reconocidos a nivel nacional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Experiencia Nacional</h3>
                      <p className="text-slate-600">
                        Trabajamos con personal altamente capacitado en el ámbito jurídico-pericial a nivel nacional e
                        internacional.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Cobertura Nacional</h3>
                      <p className="text-slate-600">
                        Nos encontramos a nivel nacional, contamos con profesionales en todos los departamentos de Perú.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Alianzas Estratégicas</h3>
                      <p className="text-slate-600">
                        Tenemos alianzas con muchos centros de capacitaciones y aliados estratégicos en todos los
                        ámbitos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-black rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Nuestro Compromiso</h3>
                  <p className="text-slate-300 mb-6">
                    Nuestros servicios están enfocados en la verdad, ética y responsabilidad, demostrando seguridad y
                    confianza a todos nuestros clientes.
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">Comprometidos por tu bienestar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-slate-600">
                Ofrecemos una amplia gama de servicios jurídicos y periciales especializados
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Servicios Jurídicos */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-red-600 text-white rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <Gavel className="h-8 w-8 text-yellow-400" />
                    <CardTitle className="text-2xl">Servicios Jurídicos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {[
                      "Derecho Penal",
                      "Derecho Civil",
                      "Derecho Administrativo",
                      "Asesoramiento Jurídico",
                      "Legalizaciones",
                    ].map((servicio, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-yellow-500" />
                        <span className="text-slate-700 font-medium">{servicio}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Servicios Periciales */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-yellow-500 text-slate-900 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <Search className="h-8 w-8 text-yellow-400" />
                    <CardTitle className="text-2xl">Servicios Periciales</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {[
                      "Peritaje de Tránsito",
                      "Peritaje Balístico",
                      "Peritaje Grafotécnico",
                      "Peritaje Informático",
                      "Peritaje de Contabilidad",
                      "Peritaje Psicológico",
                      "Peritaje de Ingeniería",
                      "Peritaje Biológico",
                      "Peritaje Médico",
                      "Peritaje Químico",
                    ].map((servicio, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-yellow-500" />
                        <span className="text-slate-700 font-medium">{servicio}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Nuestros Valores</h2>
              <p className="text-xl text-slate-600">Los principios que guían nuestro trabajo diario</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integridad",
                  desc: "Actuamos con integridad y profesionalismo en todo lo que hacemos.",
                },
                {
                  icon: Award,
                  title: "Excelencia",
                  desc: "Nos esforzamos por brindar servicios de alta calidad y excelencia.",
                },
                { icon: Target, title: "Innovación", desc: "Comprometidos con la innovación y la mejora continua." },
                {
                  icon: Eye,
                  title: "Confidencialidad",
                  desc: "Mantenemos la confidencialidad y privacidad de la información.",
                },
                {
                  icon: Heart,
                  title: "Respeto",
                  desc: "Tratamos a clientes, colegas y comunidad con respeto y dignidad.",
                },
                {
                  icon: CheckCircle,
                  title: "Responsabilidad",
                  desc: "Asumimos la responsabilidad de nuestros actos y decisiones.",
                },
              ].map((valor, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <valor.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{valor.title}</h3>
                    <p className="text-slate-600">{valor.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="h-8 w-8 text-yellow-400" />
                  <h2 className="text-3xl font-bold">Nuestra Misión</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Brindar servicios de derecho y pericial de alta calidad, innovadores y eficaces, que permiten estar
                    a la altura de todos nuestros clientes así alcanzar sus objetivos.
                  </p>
                  <p>
                    Ser un socio confiable y valioso para nuestros clientes, proporcionándoles asesoramiento jurídico y
                    pericial experto.
                  </p>
                  <p>
                    Proporcionar soluciones legales y periciales que satisfagan las necesidades de nuestros clientes y
                    contribuyan al éxito de sus negocios y juicios judiciales.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-8 w-8 text-yellow-400" />
                  <h2 className="text-3xl font-bold">Nuestra Visión</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    En ECP nos esforzamos por seguir siendo líderes en la presentación de servicios de derecho y pericia, reconocidos por nuestra excelencia y compromiso con nuestros clientes.
                  </p>
                  <p>
                    Queremos ser reconocidos por nuestra integridad, innovación y compromiso con nuestro trabajo y ser
                    el primer punto de contacto para aquellos que buscan asesoramiento jurídico y pericial experto.
                  </p>
                  <p>
                    En el futuro nos vemos como la empresa líder en la presentación de servicios en el sistema judicial
                    en nuestro país, con una reputación y una presencia a nivel nacional e internacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Lo que Dicen Nuestros Clientes</h2>
              <p className="text-xl text-slate-600">La confianza de nuestros clientes es nuestro mayor logro</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  role: "Empresaria",
                  content:
                    "Excelente servicio jurídico. Me ayudaron con un caso complejo de derecho civil y obtuvimos resultados excepcionales. Muy profesionales y confiables.",
                  rating: 5,
                },
                {
                  name: "Carlos Mendoza",
                  role: "Abogado",
                  content:
                    "Los peritajes que realizan son de la más alta calidad. He trabajado con ellos en varios casos y siempre superan las expectativas. Altamente recomendados.",
                  rating: 5,
                },
                {
                  name: "Ana Rodríguez",
                  role: "Directora de RRHH",
                  content:
                    "Su asesoramiento jurídico ha sido fundamental para nuestra empresa. Son transparentes, éticos y siempre buscan la mejor solución para sus clientes.",
                  rating: 5,
                },
              ].map((testimonio, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonio.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-4 italic">"{testimonio.content}"</p>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonio.name}</p>
                      <p className="text-sm text-slate-500">{testimonio.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Contáctanos</h2>
              <p className="text-xl text-slate-600">Estamos aquí para ayudarte. Consulta gratuita disponible.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-black">Teléfono</p>
                      <p className="text-slate-600">+51 950 711 770  </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-black">Email</p>
                      <p className="text-slate-600">estudiocriminalistico2025@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-black">Ubicación</p>
                      <p className="text-slate-600">Av. 22 de Agosto 914, Comas   </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-black mb-4">Síguenos en Redes Sociales</h4>
                  <div className="flex space-x-4">
                    <Link href="https://www.facebook.com/share/1CbCsXD9vv/" className="bg-black p-3 rounded-lg text-white hover:bg-gray-900 transition-colors">
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link href="https://www.tiktok.com/@estudio.criminals?_t=ZS-8yforLINZQd&_r=1" className="bg-black p-3 rounded-lg text-white hover:bg-gray-900 transition-colors">
                      <img src="/images/tiktok-logo.png" alt="TikTok Logo" className="h-6 w-6" />
                    </Link>
                    
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="/images/ecp-logo.jpg"
                    alt="Estudio Criminalístico Perú Logo"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Estudio Criminalístico Perú</h3>
                    <p className="text-gray-400">Servicios Jurídicos y Periciales</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  Perú con Nuevas Visiones Criminalísticas. Somos el estudio criminalístico líder en el Perú. Con peritos y abogados certificados, resolvemos casos con precisión, ética y resultados comprobados.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/share/1CbCsXD9vv/" className="text-gray-400 hover:text-red-400 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.tiktok.com/@estudio.criminals?_t=ZS-8yforLINZQd&_r=1" className="text-gray-400 hover:text-red-400 transition-colors tracking-normal leading-7">
                    <img src="/images/tiktok-logo.png" alt="TikTok Logo" className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-red-500 transition-colors">
                      Derecho Penal
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-500 transition-colors">
                      Derecho Civil
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-500 transition-colors">
                      Servicios Periciales
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-500 transition-colors">
                      Asesoramiento Jurídico
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>+51 950 711 770</li>
                  <li>estudiocriminalistico2025@gmail.com</li>
                  <li>Av. 22 de Agosto 914, Comas</li>
                  
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Estudio Criminalístico Perú. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp CTA Flotante */}
      <a
        href="https://wa.me/51950711770?text=Hola,%20me%20interesa%20solicitar%20una%20consulta%20gratuita%20sobre%20sus%20servicios%20jurídicos%20y%20periciales."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group animate-pulse tracking-normal text-6xl"
      >
        <svg className="h-8 w-8 text-6xl" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      </a>
    </div>
  )
}
