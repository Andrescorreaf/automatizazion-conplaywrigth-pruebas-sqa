import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/home-page';

const TODO_ITEMS = [
  'Botella térmica para niños de 400ML',
  '3',
  '27.639,79'
] as const;

const URL = 'https://es.aliexpress.com/';
let homePage: HomePage

test.beforeEach(async ({page})=>{
    await page.goto(URL)
    homePage = new HomePage(page);

})


test.describe('Agregar 3 pŕoductos al carrito de compras ', () =>{

    test('Buscar producto', async ({page}) => {
             
     
        const search = page.locator('#search-words');

        await search.fill(TODO_ITEMS[0]);
        await search.press('Enter');
        await page.waitForTimeout(2000);

        const cardList = page.locator('#card-list');
        await expect(cardList.first()).toBeVisible();
        
        // Afirmar que el producto se encuentra en la pagina
        await expect(cardList.first()).toContainText(TODO_ITEMS[0]);

        await cardList.first().click();

        await page.waitForTimeout(2000);

        await expect(page.locator('.sku-item--selected--ITGY_EO').isVisible()).toBeTruthy();

      });
      
    test('Agregar producto al carrito', async ({ page }) => {

      // Seleccionar caracteristica del producto
      await page.locator('.sku-item--selected--ITGY_EO').click();
      
      //Click en agregar producto
      await page.getByRole('button', { name: 'Agregar al carrito' }).click();            
      
      // Afirmar con alerta que el producto se agrego con exito.
      await expect(page.getByText('Añadido a la cesta!')).toBeVisible();
    });
    
      
    test.skip(' Agregar 2 pedidos más y confirmar valor', async ({page}) => {    
    
      // Ingresamo cantidad de pedido
      const inputPedido = page.locator(".comet-v2-input-number-input");
      await inputPedido.fill(TODO_ITEMS[1]);
  
    
      // Confirmamos valor
      const valorActual = page.locator(".cart-summary-item-content").innerText();

      await expect(valorActual).not.toEqual(TODO_ITEMS[2])
    
    
    });

})

