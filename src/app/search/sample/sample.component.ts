import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  searchTerm: string = '';
  items: { label: string, link: string }[] = [
    { label: 'LAGNER', link: '/blank-page' },
    { label: 'ALE', link: '/blank-page' },
    { label: 'STOUT', link: '/blank-page' },
    { label: 'INDIA PALE ALE', link: '/blank-page' },
    { label: 'PILSNER', link: '/blank-page' },
    { label: 'WHEAT BEER', link: '/blank-page' },
    { label: 'RED WINE', link: '/blank-page' },
    { label: 'WHITE WINE', link: '/blank-page' },
    { label: 'ROSÉ', link: '/blank-page' },
    { label: 'SPARKLING WINE', link: '/blank-page' },
    { label: 'DESSERT WINE', link: '/blank-page' },
    { label: 'FORTIFIED WINE', link: '/blank-page' },
    { label: 'WHISKEY', link: '/blank-page' },
    { label: 'VODKA', link: '/blank-page' },
    { label: 'RUM', link: '/blank-page' },
    { label: 'TEQUILA & MEZCAL', link: '/blank-page' },
    { label: 'GIN', link: '/blank-page' },
    { label: 'BRANDY', link: '/blank-page' },
    { label: 'BAILEYS IRISH CREAM', link: '/blank-page' },
    { label: 'COINTREAU', link: '/blank-page' },
    { label: 'AMARETTO', link: '/blank-page' },
    { label: 'CHAMBORD', link: '/blank-page' },
    { label: 'SAMBUCA', link: '/blank-page' },
    { label: 'JÄGERMEISTER', link: '/blank-page' },
    { label: 'SAKE', link: '/blank-page' },
    { label: 'SOJU', link: '/blank-page' },
    { label: 'MIJIU', link: '/blank-page' },
    { label: 'RƯỢU CẦN', link: '/blank-page' },
    { label: 'LAO-LAO', link: '/blank-page' },
    { label: 'TAPUY', link: '/blank-page' }
  ];

  handleSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
  }

  filteredItems() {
    return this.items.filter(item => item.label.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  isExternalLink(link: string): boolean {
    return link.startsWith('http://') || link.startsWith('https://');
  }
}
