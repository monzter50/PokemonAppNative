# MY Pokemon Application

## Description

I am creating a react native app so that I can improve my skills and understanding about zustand and typing. 
- What does the library do? 
- What is it for? 
- What it is different about redux and JS?
## Requirements 

- Use zustand
- Use Typescript
- Use React Navigation
- Implement Responsive

## Documentation
### Home Screen
https://user-images.githubusercontent.com/17136843/223911735-96424c9e-1ff0-47ab-a07c-e77955d1ce6f.mp4

### Search Screen  
https://user-images.githubusercontent.com/17136843/223911808-85bbd226-97ef-4ab3-84a2-5059a3f237f8.mp4

### Favorite Screen

https://user-images.githubusercontent.com/17136843/224374123-169d5aca-0a18-4596-8971-8f0c87901573.mp4


## Features

- Home Screen ✅
  - List Pokemons ✅
  - Pagination ✅
  - Go to Details Pokemon ✅
- Details Screen ✅
  - Avatar ✅
  - Description ✅
  - Type ✅
  - Weakness ✅
  - Back ✅
- Add favorites Screen ✅
  - List favorites pokemon ✅
  - Go to details Pokemon ✅
- Search Screen ✅  
  - Search Box ✅
  - Logic find pokemon ✅
  - Show list pokemon lookup ✅
- Navigations ✅
    - Bottom menu ✅
        - Home ✅
        - Details ✅
        - Favorite ✅
        - Search ✅
     

# Guía de Troubleshooting: Errores con `boost.podspec` en iOS (React Native)

## Problema Común

Durante la compilación de la aplicación iOS en React Native, pueden surgir errores relacionados con el archivo `boost.podspec` ubicado en `node_modules/react-native/third-party-podspecs/boost.podspec`. Estos errores a menudo se manifiestan como:

*   No se puede encontrar la especificación para `boost`.
*   Conflictos de versión con `boost`.
*   Errores durante la fase `pod install`, a menudo relacionados con la descarga o verificación (SHA) de la fuente de `boost`.

Estos problemas suelen ocurrir después de actualizar React Native, instalar nuevas dependencias que también usan `boost`, o si el entorno de compilación de iOS (especialmente los artefactos de `Pods`) se corrompe. A veces, la versión o la configuración (como la URL de descarga o el hash SHA256) del `boost.podspec` incluida en React Native puede tener algún problema o incompatibilidad temporal que requiera una modificación manual.

## Pasos para la Solución

1.  **Limpieza Profunda del Proyecto iOS:**
    Los artefactos de compilación viejos o corruptos son una causa frecuente de errores con Pods.
    *   **Navega al directorio `ios`**:
        ```bash
        cd ios
        ```
    *   **Elimina la carpeta `build`**:
        ```bash
        rm -rf build
        ```
    *   **(Opcional pero recomendado) Limpia desde Xcode**: Abre el proyecto (`.xcworkspace`) en Xcode y selecciona `Product` > `Clean Build Folder`.

2.  **Reinstalación Completa de Pods:**
    Esto asegura que todas las dependencias de Cocoapods se descarguen e instalen desde cero.
    *   **Elimina `Podfile.lock`**:
        ```bash
        rm -f Podfile.lock
        ```
    *   **Elimina el directorio `Pods`**:
        ```bash
        rm -rf Pods
        ```
    *   **Actualiza el repositorio de specs de Cocoapods (opcional)**:
        ```bash
        pod repo update
        ```
    *   **Instala los Pods de nuevo**:
        ```bash
        pod install
        ```

3.  **Identificar, Aplicar Parche y Especificar el Cambio (Si los pasos anteriores no funcionan):**
    *   **Localiza el archivo**: El archivo a modificar es `node_modules/react-native/third-party-podspecs/boost.podspec`.
    *   **Modifica el archivo `boost.podspec`**: Realiza los cambios necesarios directamente en `node_modules/react-native/third-party-podspecs/boost.podspec`.
        *   **Descripción del Cambio Específico:**
            ```
            // **** ¡AQUÍ DESCRIBIRÍAS EL CAMBIO EXACTO QUE HICISTE! ****
            // Ejemplo: "Se comentó la línea del sha256 porque fallaba la verificación"
            // Ejemplo: "Se cambió la URL en spec.source[:http] a '...' "
            // Ejemplo: "Se actualizó spec.version a '1.XX.X' "

            # Ejemplo de cómo se vería una línea comentada:
            # :sha256 => 'f0397ba6e982c4450f27bf32a2a83292aba035b827a5623a14636ea583318c41' }
            ```
        *   **¡Importante!** Este cambio es temporal hasta que crees el parche.
    *   **Verifica que el cambio funciona**: Ejecuta `pod install` de nuevo en el directorio `ios`. Si la instalación tiene éxito, procede a crear el parche.
    *   **Crea el parche con `patch-package`**: Desde la raíz de tu proyecto, ejecuta:
        ```bash
        npx patch-package react-native
        # O con Yarn:
        # yarn patch-package react-native
        ```
        Esto generará un archivo en `patches/react-native+<version>.patch`.
    *   **Asegúrate de que `patch-package` se ejecute automáticamente**: Verifica/añade el script `postinstall` en tu `package.json`:
        ```json
        // package.json
        "scripts": {
          "postinstall": "patch-package"
        }
        ```
    *   **Añade la carpeta `patches/` a Git**:
        ```bash
        git add patches/
        git commit -m "fix: apply patch to react-native for boost.podspec issue"
        ```

4.  **Verificaciones Adicionales:**
    *   **Versión de React Native y Cocoapods**: Asegúrate de que sean compatibles.
    *   **Contenido del `Podfile`**: Revisa que no haya conflictos.

## Resultado Esperado

Siguiendo estos pasos, y describiendo claramente el cambio aplicado al `boost.podspec` antes de generar el parche, no solo resuelves el problema de compilación, sino que también documentas y persistes la solución de forma adecuada usando `patch-package`.
