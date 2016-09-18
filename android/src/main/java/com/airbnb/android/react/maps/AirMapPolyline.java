package com.airbnb.android.react.maps;

import android.content.Context;

import com.amap.api.maps.AMap;
import com.amap.api.maps.model.LatLng;
import com.amap.api.maps.model.Polyline;
import com.amap.api.maps.model.PolylineOptions;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import java.util.ArrayList;
import java.util.List;

public class AirMapPolyline extends AirMapFeature {

    private PolylineOptions polylineOptions;
    private Polyline polyline;

    private List<LatLng> coordinates;
    private int color;
    private float width;
    private boolean geodesic;
    private float zIndex;

    public AirMapPolyline(Context context) {
        super(context);
    }

    public void setCoordinates(ReadableArray coordinates) {
        this.coordinates = new ArrayList<>(coordinates.size());
        for (int i = 0; i < coordinates.size(); i++) {
            ReadableMap coordinate = coordinates.getMap(i);
            this.coordinates.add(i,
                    new LatLng(coordinate.getDouble("latitude"), coordinate.getDouble("longitude")));
        }
        if (polyline != null) {
            polyline.setPoints(this.coordinates);
        }
    }

    public void setColor(int color) {
        this.color = color;
        if (polyline != null) {
            polyline.setColor(color);
        }
    }

    public void setWidth(float width) {
        this.width = width;
        if (polyline != null) {
            polyline.setWidth(width);
        }
    }

    public void setZIndex(float zIndex) {
        this.zIndex = zIndex;
        if (polyline != null) {
            polyline.setZIndex(zIndex);
        }
    }

    public void setGeodesic(boolean geodesic) {
        this.geodesic = geodesic;
        if (polyline != null) {
            polyline.setGeodesic(geodesic);
        }
    }

    public PolylineOptions getPolylineOptions() {
        if (polylineOptions == null) {
            polylineOptions = createPolylineOptions();
        }
        return polylineOptions;
    }

    private PolylineOptions createPolylineOptions() {
        PolylineOptions options = new PolylineOptions();
        options.addAll(coordinates);
        options.color(color);
        options.width(width);
        options.geodesic(geodesic);
        options.zIndex(zIndex);
        return options;
    }

    @Override
    public Object getFeature() {
        return polyline;
    }

    @Override
    public void addToMap(AMap map) {
        polyline = map.addPolyline(getPolylineOptions());
    }

    @Override
    public void removeFromMap(AMap map) {
        polyline.remove();
    }
}
