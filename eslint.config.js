// Importa la configuración recomendada de ESLint para JavaScript
import js from '@eslint/js'
// Importa los entornos globales (por ejemplo, browser, node)
import globals from 'globals'
// Importa el plugin para las reglas de los hooks de React
import reactHooks from 'eslint-plugin-react-hooks'
// Importa el plugin para el soporte de React Refresh (HMR)
import reactRefresh from 'eslint-plugin-react-refresh'

// Exporta la configuración de ESLint como un array de objetos
export default [
  // Ignora la carpeta 'dist' para no analizar archivos generados
  { ignores: ['dist'] },
  {
    // Aplica la configuración a todos los archivos .js y .jsx
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020, // Especifica la versión de ECMAScript
      globals: globals.browser, // Define variables globales del entorno navegador
      parserOptions: {
        ecmaVersion: 'latest', // Usa la versión más reciente de ECMAScript
        ecmaFeatures: { jsx: true }, // Habilita el soporte para JSX
        sourceType: 'module', // Usa módulos ES
      },
    },
    plugins: {
      'react-hooks': reactHooks, // Habilita reglas para hooks de React
      'react-refresh': reactRefresh, // Habilita reglas para React Refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Incluye reglas recomendadas de ESLint
      ...reactHooks.configs.recommended.rules, // Incluye reglas recomendadas para hooks
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], // Error si hay variables no usadas, excepto si empiezan con mayúscula o guion bajo
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Permite exportaciones constantes
      ],
    },
  },
]
