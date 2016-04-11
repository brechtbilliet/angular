'use strict';var lang_1 = require('angular2/src/facade/lang');
var interfaces_1 = require('./interfaces');
function hasLifecycleHook(lcInterface, token) {
    if (!(token instanceof lang_1.Type))
        return false;
    var proto = token.prototype;
    switch (lcInterface) {
        case interfaces_1.LifecycleHooks.AfterContentInit:
            return !!proto.ngAfterContentInit;
        case interfaces_1.LifecycleHooks.AfterContentChecked:
            return !!proto.ngAfterContentChecked;
        case interfaces_1.LifecycleHooks.AfterViewInit:
            return !!proto.ngAfterViewInit;
        case interfaces_1.LifecycleHooks.AfterViewChecked:
            return !!proto.ngAfterViewChecked;
        case interfaces_1.LifecycleHooks.OnChanges:
            return !!proto.ngOnChanges;
        case interfaces_1.LifecycleHooks.DoCheck:
            return !!proto.ngDoCheck;
        case interfaces_1.LifecycleHooks.OnDestroy:
            return !!proto.ngOnDestroy;
        case interfaces_1.LifecycleHooks.OnInit:
            return !!proto.ngOnInit;
        default:
            return false;
    }
}
exports.hasLifecycleHook = hasLifecycleHook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX2xpZmVjeWNsZV9yZWZsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWYxdVByeWpzLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZGlyZWN0aXZlX2xpZmVjeWNsZV9yZWZsZWN0b3IudHMiXSwibmFtZXMiOlsiaGFzTGlmZWN5Y2xlSG9vayJdLCJtYXBwaW5ncyI6IkFBQUEscUJBQW1CLDBCQUEwQixDQUFDLENBQUE7QUFDOUMsMkJBQTZCLGNBQWMsQ0FBQyxDQUFBO0FBRTVDLDBCQUFpQyxXQUEyQixFQUFFLEtBQUs7SUFDakVBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLFlBQVlBLFdBQUlBLENBQUNBLENBQUNBO1FBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBRTNDQSxJQUFJQSxLQUFLQSxHQUFTQSxLQUFNQSxDQUFDQSxTQUFTQSxDQUFDQTtJQUVuQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDcEJBLEtBQUtBLDJCQUFjQSxDQUFDQSxnQkFBZ0JBO1lBQ2xDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxrQkFBa0JBLENBQUNBO1FBQ3BDQSxLQUFLQSwyQkFBY0EsQ0FBQ0EsbUJBQW1CQTtZQUNyQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EscUJBQXFCQSxDQUFDQTtRQUN2Q0EsS0FBS0EsMkJBQWNBLENBQUNBLGFBQWFBO1lBQy9CQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxDQUFDQTtRQUNqQ0EsS0FBS0EsMkJBQWNBLENBQUNBLGdCQUFnQkE7WUFDbENBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLGtCQUFrQkEsQ0FBQ0E7UUFDcENBLEtBQUtBLDJCQUFjQSxDQUFDQSxTQUFTQTtZQUMzQkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0E7UUFDN0JBLEtBQUtBLDJCQUFjQSxDQUFDQSxPQUFPQTtZQUN6QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7UUFDM0JBLEtBQUtBLDJCQUFjQSxDQUFDQSxTQUFTQTtZQUMzQkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0E7UUFDN0JBLEtBQUtBLDJCQUFjQSxDQUFDQSxNQUFNQTtZQUN4QkEsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFDMUJBO1lBQ0VBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2pCQSxDQUFDQTtBQUNIQSxDQUFDQTtBQXpCZSx3QkFBZ0IsbUJBeUIvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtMaWZlY3ljbGVIb29rc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZmVjeWNsZUhvb2sobGNJbnRlcmZhY2U6IExpZmVjeWNsZUhvb2tzLCB0b2tlbik6IGJvb2xlYW4ge1xuICBpZiAoISh0b2tlbiBpbnN0YW5jZW9mIFR5cGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIHByb3RvID0gKDxhbnk+dG9rZW4pLnByb3RvdHlwZTtcblxuICBzd2l0Y2ggKGxjSW50ZXJmYWNlKSB7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5BZnRlckNvbnRlbnRJbml0OlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdBZnRlckNvbnRlbnRJbml0O1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuQWZ0ZXJDb250ZW50Q2hlY2tlZDpcbiAgICAgIHJldHVybiAhIXByb3RvLm5nQWZ0ZXJDb250ZW50Q2hlY2tlZDtcbiAgICBjYXNlIExpZmVjeWNsZUhvb2tzLkFmdGVyVmlld0luaXQ6XG4gICAgICByZXR1cm4gISFwcm90by5uZ0FmdGVyVmlld0luaXQ7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5BZnRlclZpZXdDaGVja2VkOlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdBZnRlclZpZXdDaGVja2VkO1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuT25DaGFuZ2VzOlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdPbkNoYW5nZXM7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5Eb0NoZWNrOlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdEb0NoZWNrO1xuICAgIGNhc2UgTGlmZWN5Y2xlSG9va3MuT25EZXN0cm95OlxuICAgICAgcmV0dXJuICEhcHJvdG8ubmdPbkRlc3Ryb3k7XG4gICAgY2FzZSBMaWZlY3ljbGVIb29rcy5PbkluaXQ6XG4gICAgICByZXR1cm4gISFwcm90by5uZ09uSW5pdDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=