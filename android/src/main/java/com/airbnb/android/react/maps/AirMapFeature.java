package com.airbnb.android.react.maps;

import android.content.Context;

import com.amap.api.maps.AMap;
import com.facebook.react.views.view.ReactViewGroup;

public abstract class AirMapFeature extends ReactViewGroup {
    public AirMapFeature(Context context) {
        super(context);
    }

    public abstract void addToMap(AMap map);

    public abstract void removeFromMap(AMap map);

    public abstract Object getFeature();
}
