// Este archivo le dice a TypeScript cómo manejar las importaciones de módulos
// de estilos (como CSS, SCSS, o LESS) que no tienen exportaciones de código.

declare module '*.css' {
  // Simplemente declaramos que cualquier importación de archivo .css es un módulo genérico.
  // El valor de la importación (si existiera) sería 'any' o 'string'.
  // Para las importaciones de efecto secundario como en layout.tsx, esto es suficiente.
  const content: unknown; 
  export default content;
}
