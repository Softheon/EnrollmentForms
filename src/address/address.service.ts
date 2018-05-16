import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { County } from './county';

/**
 * The address service
 */
@Injectable()
export class AddressService {

  /** The get county API URL */
  public apiGetCountyUrl: string = "/api/county/";

  /** The coverage year */
  public coverageYear: number = new Date().getFullYear();

  /** The previously-retrieved counties */
  private countyRepository: County[] = [];

  /**
   * Constructs the service
   * @param http The HTTP client
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets the counties associated with the given zip code
   * @param zipCode The zip code
   */
  public getCounties(zipCode: string): Promise<County[]> {
    // First check if the county info had previously been retrieved
    let counties = this.countyRepository.filter(c => c.zipCode == zipCode);
    if (counties.length) {
      return Promise.resolve(counties);
    }

    // If county not found, search for the counties
    let request = this.getRequest(zipCode);

    return this.get<County[]>(request).then(result => {
      if (result) {
        // Add counties to the repository to prevent re-calling this API
        this.countyRepository = this.countyRepository.concat(result);
      }
      return result;
    }).catch(error => {
      return Promise.reject('An error has occurred');
    });
  }

  /**
   * Get Counties API call
   * This method should be overwritten by the application
   * @param request The request
   */
  public get<T>(request: string): Promise<T> {
    return this.http.get<T>(request).toPromise();
  }

  /**
   * Gets the full URI for an API request
   * This method should be overwritten by the application
   * @param uri The partial URI
   */
  public getFullUri(uri: string): string {
    return uri;
  }

  /**
   * Gets the API request string
   * This method can be overwritten for alternate request patterns
   * @param zipCode The zip code
   */
  public getRequest(zipCode: string): string {
    return `${this.apiGetCountyUrl}${zipCode}?year=${this.coverageYear}`;
  }

}
