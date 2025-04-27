import { test, expect } from '@playwright/test';
import {HomePage} from '../pages/home-page';

const TODO_ITEMS = [
  'USB difusor de Aroma grano de madera luz LED nocturna difuso',
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

    test.only('Buscar producto', async ({page}) => {
             
     
        const newTodo = page.locator('#search-words');

        await newTodo.fill(TODO_ITEMS[0]);
        await newTodo.press('Enter');

        await page.getByRole('link').locator("#card-list").first().click();

        await expect(page.locator('h1')).toContainText(TODO_ITEMS[0]);

      });
      
    test.only('Agregar producto al carrito', async ({ page }) => {

      // Seleccionar caracteristica del producto
      await page.getByText('dark wood', { exact: true }).locator('span').click();
      
      //Click en agregar producto
      await page.getByRole('button', { name: 'Agregar al carrito' }).click();            
      
      // Afirmar con alerta que el producto se agrego con exito.
      await expect(page.getByText('Añadido a la cesta!')).toBeVisible();
    });
    
      
    test(' Agregar 2 pedidos más y confirmar valor', async ({page}) => {    
    
      // Ingresamo cantidad de pedido
      const inputPedido = page.locator(".comet-v2-input-number-input");
      await inputPedido.fill(TODO_ITEMS[1]);
  
    
      // Confirmamos valor
      const valorActual = page.locator(".cart-summary-item-content").innerText();

      await expect(valorActual).not.toEqual(TODO_ITEMS[2])

    
    
    });

})

