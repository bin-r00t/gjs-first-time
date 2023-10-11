/* window.js
 *
 * Copyright 2023 bin-r00t
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

var DemoWindow = new Lang.Class({
    Name: 'DemoWindow',
    GTypeName: 'DemoWindow',
    Extends: Gtk.ApplicationWindow,
    Template: 'resource:///org/gnome/Demo/window.ui',
    InternalChildren: ['label'],

    _init(application) {
        this.parent({
            application,
        });
    },
});

