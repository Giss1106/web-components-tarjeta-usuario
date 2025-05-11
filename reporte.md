```markdown
# Reporte Técnico

## Encapsulación con Shadow DOM
La encapsulación se logra usando `this.attachShadow({ mode: 'open' })`, lo que permite que el contenido interno del componente no afecte el exterior ni sea afectado.

## Diferencias entre slots
- **Slot con nombre** (`slot="nombre"`): permite posicionar el contenido en una sección específica.
- **Slot por defecto**: solo se puede tener uno y captura el contenido sin atributo `slot`.

## Limitaciones
- No todos los navegadores antiguos soportan Web Components.
- Difícil integración con algunos frameworks.