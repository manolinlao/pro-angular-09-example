import {Directive, Input, TemplateRef, ViewContainerRef, SimpleChanges} from '@angular/core';

@Directive({
    selector: '[paIf]',
})
export class PaStructureDirective {
    constructor(private container: ViewContainerRef, private template: TemplateRef<Object>) {}

    @Input('paIf')
    expressionResult: boolean | undefined;

    ngOnChanges(changes: SimpleChanges) {
        let change = changes['expressionResult'];
        console.log('change', change);
        if (!change.isFirstChange() && !change.currentValue) {
            this.container.clear();
        } else if (change.currentValue) {
            this.container.createEmbeddedView(this.template);
        }
    }
}
